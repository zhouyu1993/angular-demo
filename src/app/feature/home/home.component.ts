import { Component, OnInit } from '@angular/core';

import { FetchService } from '@app/core/fetch.service';
import { HttpService } from '@app/core/http.service';
import api from '@app/core/api';

declare const window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  special_key = '';
  special_url = '';
  hotkey = [];
  history = [];
  searching = false;
  keyword = '';
  song_info = {};
  song = {};
  loading = false;
  playing = false;
  duration = 0;
  currentTime = 0;
  progress = '0%';

  constructor (
    private fetchService: FetchService,
    private httpService: HttpService,
  ) { }

  ngOnInit () {
    this.getData();
  }

  async getData () {
    console.log(this.fetchService);
    const res = await this.fetchService.fetch(api.HOTKEY, {}, {
      // withCredentials: true,
    });
    console.log(res);

    this.getHotkey();
  }

  async getHotkey () {
    try {
      const res = await this.httpService.get(api.HOTKEY, {
        // withCredentials: true,
      });

      if (+res.code === 0) {
        const data = res.data || {};

        this.special_key = data.special_key || '';
        this.special_url = data.special_url || '';
        this.hotkey = data.hotkey || [];
      }

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  getHistory () {
    try {
      const history = (localStorage && localStorage.getItem('history'));

      if (history) {
        this.history = JSON.parse(history);
      }
    } catch (e) {
      console.log(e);
    }
  }

  onFocus () {
    this.searching = true;
    this.getHistory();
  }

  onCancel () {
    this.searching = false;
    this.keyword = '';
    this.song_info = {};
  }

  onEnter (value) {
    this.goSearch(value);
  }

  async goSearch (keyword) {
    this.keyword = keyword;
    this.saveStorage(keyword);

    try {
      const res = await this.httpService.get(`${api.SEARCH}?from=webapp_music&format=json&method=baidu.ting.search.merge&query=${keyword}&page_size=20&page_no=0&type=0,1,2,5,7`, {
        // withCredentials: true,
      });

      if (+res.error_code === 22000) {
        const data = res.result || {};

        this.song_info = data.song_info || {};
      }

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  onClear () {
    this.history = [];
    if (localStorage) {
      localStorage.setItem('history', '');
    }
  }

  saveStorage (keyword) {
    if (keyword && localStorage) {
      let historyArray = [];

      const history = localStorage.getItem('history');
      if (history) {
        historyArray = JSON.parse(history) || [];
        historyArray.push(keyword);
        const historySet = new Set(historyArray);
        historyArray = Array.from(historySet);
      } else {
        historyArray.push(keyword);
      }

      localStorage.setItem('history', JSON.stringify(historyArray));
    }
  }

  async getSong (song_id) {
    // http://musicapi.taihe.com/v1/restserver/ting?format=json&from=webapp_music&method=baidu.ting.song.playAAC&songid=591517652

    try {
      const res = await this.httpService.get(`${api.SEARCH}?format=json&from=webapp_music&method=baidu.ting.song.playAAC&songid=${song_id}`, {
        // withCredentials: true,
      });

      if (+res.error_code === 22000) {
        const data = res;

        const file_link = data.bitrate && data.bitrate.file_link;

        this.song = {
          file_link,
          pic_small: data.songinfo && data.songinfo.pic_small,
          title: data.songinfo && data.songinfo.title,
          author: data.songinfo && data.songinfo.author,
        };

        try {
          // 音频直接播放遭遇 403，估计服务端设置了 referer 防盗链机制。设置 iframe 跨域
          window.iframeaudiocontent = `<audio id="audio" src="${file_link}" autoplay controls preload></audio>`;
          window.iframeaudio.src = 'javascript:parent.iframeaudiocontent;';

          const audio = window.iframeaudio.contentDocument.getElementsByTagName('audio')[0];

          if (audio) {
            audio.play();

            audio.addEventListener('play', () => {
              this.playing = true;
            });

            audio.addEventListener('pause', () => {
              this.playing = false;
            });

            audio.addEventListener('waiting', () => {
              this.loading = true;

              audio.play();
            });

            audio.addEventListener('loadstart', () => {
              this.loading = true;

              audio.play();
            });

            audio.addEventListener('durationchange', () => {
              this.duration = (audio.duration || 0) * 1000;
            });

            audio.addEventListener('canplaythrough', () => {
              this.loading = false;
            });

            audio.addEventListener('timeupdate', () => {
              this.duration = (audio.duration || 0) * 1000;
              this.currentTime = audio.currentTime * 1000;
              this.progress = audio.duration ? audio.currentTime / audio.duration * 100 + '%' : '0%';
            });

            audio.addEventListener('error', () => {
              this.loading = false;
            });
          }
        } catch (e) {
          console.log(e);
        }
      }

      console.log(res);

    } catch (e) {
      console.log(e);
    }
  }

}

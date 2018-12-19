import { Component, OnInit } from '@angular/core';

import { FetchService } from '@app/core/fetch.service';
import api from '@app/core/api';
import { HeroService } from '@app/core/hero.service';
import { Hero } from '@app/utils/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor (
    private fetchService: FetchService,
    private heroService: HeroService
  ) {
  }

  ngOnInit () {
    this.getData();
    this.getHeroes();
  }

  async getData () {
    this.fetchService.get('https://cms.cekid.com/publish/998/newindex2017.json').then(json => {
      console.log(json);
    });

    const res = await this.fetchService.get(api.HOTKEY, {
      withCredentials: true,
    });

    console.log(res);

    const res1 = await this.fetchService.get(`${api.SEARCH}?from=webapp_music&format=json&method=baidu.ting.search.merge&query=卡路里&page_size=10&page_no=1`, {
      withCredentials: true,
    });

    console.log(res1);
  }

  getHeroes (): void {
    // 有点类似 Promise().then
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

}

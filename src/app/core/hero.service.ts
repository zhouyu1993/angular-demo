import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from '@app/shared/utils/hero';
import { HEROES } from '@app/shared/utils/mock-heroes';

import { Config } from '@app/shared/utils/config';

import api from '@app/core/api';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor (
    private http: HttpClient,
  ) {
  }

  getHeroes (): Observable<Hero[]> {
    const r1 = HEROES;
    const r2 = of(HEROES);

    console.log('getHeroes', r1, r2);

    return of(HEROES);
  }

  getConfig (): Observable<Config> {
    const res = this.http.get<Config>(api.HOTKEY);

    // 返回的是 Observable，调用 subscribe() 方法时，才能执行请求
    console.log('getConfig', res);

    return res;
  }
}

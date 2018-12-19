import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '@app/utils/hero';
import { HEROES } from '@app/utils/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor () {
  }

  getHeroes (): Observable<Hero[]> {
    return of(HEROES);
  }
}

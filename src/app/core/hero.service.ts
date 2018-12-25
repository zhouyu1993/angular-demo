import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '@app/shared/utils/hero';
import { HEROES } from '@app/shared/utils/mock-heroes';

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

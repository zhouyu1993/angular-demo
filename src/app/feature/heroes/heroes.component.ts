import { Component, OnInit } from '@angular/core';

import { HeroService } from '@app/core/hero.service';
import { Hero } from '@app/shared/utils/hero';

import { Config } from '@app/shared/utils/config';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  config: Config;

  selectedHero: Hero;

  constructor (
    private heroService: HeroService,
  ) {

  }

  ngOnInit () {
    this.getHeroes();

    this.getConfig();
  }

  getHeroes (): void {
    this.heroService.getHeroes()
      .subscribe((res: Hero[]) => {
        console.log(res);

        this.heroes = res;
      });
  }

  getConfig (): void {
    this.heroService.getConfig()
      .subscribe((res: Config) => {
        console.log(res);

        this.config = res;
      });
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

  editHero (hero: Hero): void {
    console.log(hero);
  }

}

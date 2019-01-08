import { Component, OnInit } from '@angular/core';

// import { HttpService } from '@app/core/http.service';
// import api from '@app/core/api';
import { HeroService } from '@app/core/hero.service';
import { Hero } from '@app/shared/utils/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor (
    // private httpService: HttpService,
    private heroService: HeroService
  ) { }

  ngOnInit () {
    this.getData();
    this.getHeroes();
  }

  async getData () {
    // this.httpService.get(url)
    // .then(json => {
    //   console.log(json);
    // });
  }

  getHeroes (): void {
    // 有点类似 Promise().then
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

  editHero (hero: Hero): void {
    console.log(hero);
  }

}

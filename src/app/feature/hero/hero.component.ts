import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  id: number;

  constructor (
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit () {
    this.getHero();
  }

  getHero (): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.id = id;
  }

  goBack (): void {
    this.location.back();
  }

}

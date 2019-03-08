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
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit () {
    this.getHero();
  }

  getHero (): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });

    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.id = id;
  }

  goBack (): void {
    this.location.back();
  }

}

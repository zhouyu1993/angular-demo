import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '@app/shared/utils/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() editRequest = new EventEmitter<Hero>();

  constructor () {
  }

  ngOnInit () {
  }

  edit (): void {
    this.editRequest.emit(this.hero);
  }

}

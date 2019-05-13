import { Component, OnInit } from '@angular/core';
// use '../../ ' to move up 2 levels in dir structure
import { Hero } from '../../Hero';
import { HeroService } from '../../hero.service';

import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

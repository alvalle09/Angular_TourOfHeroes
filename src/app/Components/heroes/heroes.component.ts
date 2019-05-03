import { Component, OnInit } from '@angular/core';
// use '../../ ' to move up 2 levels in dir structure
import { HEROES } from '../../mock-heroes';
import { Hero } from '../../hero';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes =  HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

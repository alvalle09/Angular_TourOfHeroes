import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-heroes';



// use '../../ ' to move up 2 levels in dir structure
import { Hero } from '../../hero';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes =  HEROES;

  constructor() {}

  ngOnInit() {}
}
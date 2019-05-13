import { Injectable } from '@angular/core';
import { Hero } from './Hero';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { 

  }

  getHeroes(): Observable<Hero[]> {
    // todo: send gthe message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching th hero
    this.messageService.add(`HeroService: fetched hero id = ${id}`); // note backticks here
    return of(HEROES.find(hero => hero.id === id));
  }



}


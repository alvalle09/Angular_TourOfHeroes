import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Ice' },
      { id: 12, name: 'Narcotics' },
      { id: 13, name: 'Bombadeer' },
      { id: 14, name: 'Celery Stick' },
      { id: 15, name: 'Magneeta' },
      { id: 16, name: 'Rubber Neck' },
      { id: 17, name: 'Dynamite' },
      { id: 18, name: 'Dr Quinn' },
      { id: 19, name: 'Magmanamus' },
      { id: 20, name: 'Tornadic' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

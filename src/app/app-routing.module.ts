import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './Components/heroes/heroes.component';


// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent 
  }
];


// exports array make router directives available foruse in AppModule components that need them
@NgModule({  
  // forRoot() method supplies the service providers and directives needed for routing
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
  
})

export class AppRoutingModule { }

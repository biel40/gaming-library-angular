import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { AddVideogameComponent } from './components/add-videogame/add-videogame.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponentComponent },
  { path: 'listGame', component: VideogamesListComponent },
  { path: 'viewGame', component: VideogamesListComponent },
  { path: 'addGame', component: AddVideogameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { VideogameDetailComponent } from './components/videogame-detail/videogame-detail.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesListComponent,
    VideogameDetailComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

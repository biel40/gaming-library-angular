import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { VideogameDetailComponent } from './components/videogame-detail/videogame-detail.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LoginComponent } from './components/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesListComponent,
    VideogameDetailComponent,
    MainComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

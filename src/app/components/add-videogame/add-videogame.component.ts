import { Component } from '@angular/core';

@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.component.html',
  styleUrls: ['./add-videogame.component.scss']
})
export class AddVideogameComponent {

  public videogameName: string = '';

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  public goBack() {
    window.history.back();
  }

  public addVideogame() {
    console.log(this.videogameName);
  }
}

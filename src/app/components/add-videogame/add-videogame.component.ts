import { Component } from '@angular/core';

@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.component.html',
  styleUrls: ['./add-videogame.component.scss']
})
export class AddVideogameComponent {

  constructor() { }

  ngOnInit(): void {

  }

  public goBack() {
    window.history.back();
  }
}

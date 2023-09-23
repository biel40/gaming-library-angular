import { Component } from '@angular/core';

@Component({
  selector: 'app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.scss']
})
export class VideogamesListComponent {

  public videogames: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.videoGames = this.videoGameService.getVideoGames();

    //TODO: Mock data
    this.videogames = [
      {
        id: 1,
        name: 'Super Mario Bros',
        description: 'Super Mario Bros is a platform game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., and the first in the Super Mario series of platformers, it was released in Japan in 1985 for the Famicom, and in North America and Europe for the Nintendo Entertainment System (NES) in 1985 and 1987 respectively. Players control Mario, or his brother Luigi in the multiplayer mode, as they travel the Mushroom Kingdom to rescue Princess Toadstool from the antagonist, Bowser.',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
        rating: 4.5,
        category: 'Platformer',
        year: 1985,
        price: 10.99
      }
    ];
  }

  viewDetails(id: number): void {

  }

  editVideoGame(id: number): void {

  }

  deleteVideoGame(id: number): void {

  }

}

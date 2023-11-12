import { Component } from '@angular/core';
import { VideoGameService } from 'src/app/services/video-game-service.service';

@Component({
  selector: 'app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.scss']
})
export class VideogamesListComponent {

  public videogames: any[] = [];

  constructor(
    private videoGameService: VideoGameService
  ) { 

  }

  async ngOnInit(): Promise<void> {
    this.videogames = await this.videoGameService.getVideoGames();

    console.log(this.videogames);
  }

  viewDetails(id: number): void {

  }

  editVideoGame(id: number): void {

  }

  deleteVideoGame(id: number): void {

  }

  public goBack(): void {
    window.history.back();
  }

}

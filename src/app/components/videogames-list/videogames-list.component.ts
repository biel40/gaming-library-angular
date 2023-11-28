import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VideoGameService } from 'src/app/services/video-game-service.service';

@Component({
  selector: 'app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.scss']
})
export class VideogamesListComponent {

  public videogames: any[] = [];

  constructor(
    private videoGameService: VideoGameService,
    private loaderService: LoaderService
  ) { 

  }

  async ngOnInit(): Promise<void> {
    this.loaderService.setLoading(true);

    this.videogames = await this.videoGameService.getVideoGames();

    this.loaderService.setLoading(false);

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

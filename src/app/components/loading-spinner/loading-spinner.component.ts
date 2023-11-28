import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingSpinnerComponent {
  public loader: LoaderService

  constructor(loader: LoaderService) {
    this.loader = loader;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Videogame {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  category: string;
  year: number;
  price: number;
}

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {

  public videogames: Videogame[] = [];

  constructor(
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
  
  }

  public logout(): void {
    //this.authService.logout();

    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './../movies.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.page.html',
  styleUrls: ['./my-favorites.page.scss'],
})
export class MyFavoritesPage implements OnInit {

  public movies:Movie[] = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getAll();
  }

}

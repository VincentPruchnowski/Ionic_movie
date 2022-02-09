import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.page.html',
  styleUrls: ['./movie-info.page.scss'],
})
export class MovieInfoPage implements OnInit {
  public movie: Movie;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = this.moviesService.getCurrent();
  }
}

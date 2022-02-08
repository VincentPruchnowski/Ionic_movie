import { Injectable } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  releaseDate?: string;
  directorName?: string;
  photoUrl?: string;
  status?: 'see' | 'mustSee';
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private currentMovie: Movie;
  Movies: Movie[] = [
    { id: '1', title: 'Gremlins1', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '2', title: 'Gremlins2', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '3', title: 'Gremlins3', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '4', title: 'Gremlins4', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '5', title: 'Gremlins5', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '6', title: 'Gremlins6', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '7', title: 'Gremlins7', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '8', title: 'Gremlins8', releaseDate: '2019-06-29', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' }
  ];

  constructor() {}

  public getAll(): Movie[] {
    return this.Movies;
  }
  public create(movie: Movie) {
    this.Movies.push(movie);
  }
  public get(id: string): Movie[] {
    return null;
  }
  public update(movie: Movie) {}
  public delete(movie: Movie) { }
  
  public getCurrent(): Movie {
    return this.currentMovie;
  }
  public setCurrent(movie: Movie) {
    this.currentMovie = movie;
  }
}

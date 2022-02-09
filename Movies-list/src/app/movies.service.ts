import { Injectable } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  releaseDate?: string;
  directorName?: string;
  directorName2?: string;
  photoUrl?: string;
  status?: 'see' | 'mustSee';
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private currentMovie: Movie;
  Movies: Movie[] = [
    { id: '1', title: 'Gremlins', releaseDate: '1984', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '2', title: 'Le Septième Sceau', releaseDate: '1957', directorName: 'Ingmar Bergman', photoUrl:'https://p7.storage.canalblog.com/75/00/1349409/128073201_o.jpg' },
    { id: '3', title: 'Inferno', releaseDate: '1980', directorName: 'Dario Argento', photoUrl:'https://media.senscritique.com/media/000016132349/source_big/Inferno.jpg' },
    { id: '4', title: 'Le Jour des morts-vivants', releaseDate: '1985', directorName: 'George A. Romero', photoUrl:'https://media.senscritique.com/media/000019420985/source_big/Le_Jour_des_morts_vivants.jpg' },
    { id: '5', title: 'Bagarres', releaseDate: '1948', directorName: 'Henri Calef', photoUrl:'https://media.senscritique.com/media/000014010145/source_big/Bagarres.jpg' },
    { id: '6', title: 'Midsommar ', releaseDate: '2019', directorName: 'Ari Aster', photoUrl:'https://media.senscritique.com/media/000018609294/source_big/Midsommar.jpg' },
    { id: '7', title: 'The Devil\'s Rejects', releaseDate: '2005', directorName: 'Rob Zombie', photoUrl:'https://media.senscritique.com/media/000020090905/source_big/The_Devil_s_Rejects.jpg' },
    { id: '8', title: 'Porco Rosso', releaseDate: '1992', directorName: 'Hayao Miyazaki', photoUrl:'https://media.senscritique.com/media/000007365703/source_big/Porco_Rosso.png' },
    { id: '9', title: 'Fascination', releaseDate: '1979', directorName: 'Jean Rollin', photoUrl:'https://media.senscritique.com/media/000018508577/source_big/Fascination.jpg' },
    { id: '10', title: 'Conan le Barbare', releaseDate: '1982', directorName: 'John Milius', photoUrl:'https://media.senscritique.com/media/000015224775/source_big/Conan_le_Barbare.jpg' },
    { id: '11', title: 'Climax', releaseDate: '2018', directorName: 'Gaspar Noé ', photoUrl:'https://media.senscritique.com/media/000017960616/source_big/Climax.jpg' },
    { id: '12', title: 'Dark Crystal', releaseDate: '1982', directorName: ' Jim Henson ', directorName2: 'Frank Oz ', photoUrl:'https://media.senscritique.com/media/000017258442/source_big/Dark_Crystal.jpg' }
    
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

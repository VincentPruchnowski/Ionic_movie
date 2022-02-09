import { Injectable } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  genre: string;
  releaseDate?: string;
  resume: string;
  directorName?: string;
  directorName2?: string;
  photoUrl?: string;
  status?: 'see' | 'mustSee' | 'favorites' | '';
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private currentMovie: Movie;
  Movies: Movie[] = [
    { id: '1', title: 'Gremlins', genre: 'comédie / horreur', releaseDate: '1984', resume: 'Gremlins ou Les Gremlins au Québec (Gremlins) est un film américain réalisé par Joe Dante et sorti en 1984.', directorName: 'Joe Dante', photoUrl:'https://image.posterlounge.fr/images/l/1896339.jpg' },
    { id: '2', title: 'Le Septième Sceau', genre: 'drame / fantastique', releaseDate: '1957', resume: 'Un grand classique du cinéma mondial', directorName: 'Ingmar Bergman', photoUrl:'https://p7.storage.canalblog.com/75/00/1349409/128073201_o.jpg' },
    { id: '3', title: 'Inferno', genre: 'fantastique / horreur', releaseDate: '1980', resume: 'Rose Elliot, jeune poétesse new-yorkaise, habite un immeuble où tout est étrange.',directorName: 'Dario Argento', photoUrl:'https://media.senscritique.com/media/000016132349/source_big/Inferno.jpg' },
    { id: '4', title: 'Le Jour des morts-vivants', genre: 'horreur', releaseDate: '1985', resume: 'Après une invasion planétaire de morts- vivants, un petit groupe recherche des éventuels survivants.' , directorName: 'George A. Romero', photoUrl:'https://media.senscritique.com/media/000019420985/source_big/Le_Jour_des_morts_vivants.jpg' },
    { id: '5', title: 'Bagarres', genre: 'drame', releaseDate: '1948', resume: 'Carmelle est une servante de ferme, mais aussi une femme magnifique, qui rêve à une vie plus confortable.',directorName: 'Henri Calef', photoUrl:'https://media.senscritique.com/media/000014010145/source_big/Bagarres.jpg' },
    { id: '6', title: 'Midsommar ', genre: 'fantastique', releaseDate: '2019', resume: 'Dani et Christian se séparent quand la famille de Dani est touchée par une tragédie.',directorName: 'Ari Aster', photoUrl:'https://media.senscritique.com/media/000018609294/source_big/Midsommar.jpg' },
    { id: '7', title: 'The Devil\'s Rejects', genre: 'horreur', releaseDate: '2005', resume: 'Dans une ferme, Le shérif John Quincy Wydell lance une grande offensive afin de déloger ceux qui ont abattu son frère',directorName: 'Rob Zombie', photoUrl:'https://media.senscritique.com/media/000020090905/source_big/The_Devil_s_Rejects.jpg' },
    { id: '8', title: 'Porco Rosso', genre: 'manga', releaseDate: '1992', resume: 'Un porc vaillant surnommé « le Porc rouge », qui se bat contre les pirates de ciel',directorName: 'Hayao Miyazaki', photoUrl:'https://media.senscritique.com/media/000007365703/source_big/Porco_Rosso.png' },
    { id: '9', title: 'Fascination', genre: 'fantastique / épouvante', releaseDate: '1979', resume: 'Le jeune chef d\'une bande de truands, décide de trahir les siens',directorName: 'Jean Rollin', photoUrl:'https://media.senscritique.com/media/000018508577/source_big/Fascination.jpg' },
    { id: '10', title: 'Conan le Barbare', genre: 'heroic-fantasy', releaseDate: '1982', resume: 'Les origines de Conan, un jeune barbare.',directorName: 'John Milius', photoUrl:'https://media.senscritique.com/media/000015224775/source_big/Conan_le_Barbare.jpg' },
    { id: '11', title: 'Climax', genre: 'drame / horreur', releaseDate: '2018', resume: 'Un groupe de danseurs urbains se retrouvent dans un local de répétition isolé en bordure d\'une forêt.',directorName: 'Gaspar Noé ', photoUrl:'https://media.senscritique.com/media/000017960616/source_big/Climax.jpg' },
    { id: '12', title: 'Dark Crystal', genre: 'heroic-fantasy', releaseDate: '1982', resume: 'Un talisman gardé dans un château accumule la lumière',directorName: ' Jim Henson ', directorName2: 'Frank Oz ', photoUrl:'https://media.senscritique.com/media/000017258442/source_big/Dark_Crystal.jpg' }
    
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

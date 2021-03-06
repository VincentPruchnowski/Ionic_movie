import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})

export class MovieList implements OnInit {
  public movies: Movie[];

  constructor(
    private moviesService: MoviesService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }


  ngOnInit() {
    this.movies = this.moviesService.getAll();
  }


  /**
 * Méthode d'ouverture de la popup d'actions sur un film.
 * @param movie
 */
  async presentActionSheet(movie: Movie) {
    const actionSheet = await this.actionSheetController.create({
      header: movie.title,
      buttons: [
        {
          text: 'Marquer vu',
          icon: 'eye',
          handler: () => {
            movie.status = 'see';
          },
        },
        {
          text: 'Marquer à voir',
          icon: 'eye-off-outline',
          handler: () => {
            movie.status = 'mustSee';
          },
        },
        {
          text: 'Ajouter aux favoris',
          icon: 'heart',
          handler: () => {
            movie.status = 'favorites';
          },
        },
        {
          text: 'Supprimer des favoris',
          icon: 'heart-dislike',
          handler: () => {
            movie.status = '';
          },
        },
        {
          text: 'Supprimer',
          icon: 'trash',
          role: 'destructive',
          handler: () => this.presentDeleteAlert(movie),
        },

        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel...');
          },
        },
      ],
    });
    await actionSheet.present();
  }


  /**
  * Méthode d'affichage de la suppression d'un film.
  * @param movie
  */
  private async presentDeleteAlert(movie: Movie) {
    const alert = await this.alertController.create({
      header: 'Supprimer cet étudiant ?',
      subHeader: `${movie.title}`,
      message: 'Cette opération ne pourra être annulée.',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => this.deleteMovie(movie),
        },
        {
          text: 'Finalement non...',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }


  /**
   * Méthode de suppression de film..
   * @param movie
   */
  async deleteMovie(movie: Movie) {
    this.movies = this.movies.filter(
      (movieDuTableau) => movieDuTableau.id !== movie.id
    );
    const toast = await this.toastController.create({
      message: `${movie.title} a été supprimé.`,
      position: 'top',
      duration: 3000,
    });
    await toast.present();
  }
  showInfo(movie: Movie) {
    this.moviesService.setCurrent(movie);
    this.router.navigateByUrl('movie-info');
  }

  async shareMovie(movie: Movie) {
    await Share.share({
      title: 'Partager mon film',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }
}

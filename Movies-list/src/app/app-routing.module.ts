import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movieList',
    loadChildren: () => import('./movie-list/movie-list.module').then( m => m.MovieListPageModule)
  },
  {
    path: 'movie-info',
    loadChildren: () => import('./movie-info/movie-info.module').then( m => m.MovieInfoPageModule)
  },  {
    path: 'my-favorites',
    loadChildren: () => import('./my-favorites/my-favorites.module').then( m => m.MyFavoritesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

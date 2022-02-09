import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieList } from './movie-list.page';

const routes: Routes = [
  {
    path: '',
    component: MovieList
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListPageRoutingModule {}

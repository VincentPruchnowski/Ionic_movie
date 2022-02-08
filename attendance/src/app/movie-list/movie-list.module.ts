import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieListPageRoutingModule } from './movie-list-routing.module';

import { MovieList } from './movie-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieListPageRoutingModule
  ],
  declarations: [MovieList]
})
export class MovieListPageModule {}

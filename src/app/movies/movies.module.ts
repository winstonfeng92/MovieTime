import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    TrailerDialogComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    InfiniteScrollModule,
    YouTubePlayerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ]
})
export class MoviesModule { }

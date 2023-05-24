import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { movieResolverResolver } from './resolvers/movie-resolver.resolver';

const routes: Routes = [
  { path: '', component: MovieListComponent},
  { path: 'card', component: MovieCardComponent},
  { path: 'movie-details/:id', 
    component: MovieDetailsComponent,
    resolve: 
    {
      movie: movieResolverResolver
    },
  },
  { path: 'movie-details', component: MovieDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

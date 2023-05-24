import { ResolveFn } from '@angular/router';
import {inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';




import { Movie } from 'src/app/models/movie';
import { Cast } from 'src/app/models/cast';
import { Video } from 'src/app/models/video';
import { MovieService } from 'src/app/services/movie.service';

export const movieResolverResolver: ResolveFn<Observable<[Movie, Cast[], Video[]]>> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  const movieId = parseInt(route.paramMap.get('id')!, 10); // Convert string to number
  console.log('resolver running')

  const movieDetails$ = inject(MovieService).getMovieDetails(movieId);
  const credits$ = inject(MovieService).getCredits(movieId);
  const videos$ = inject(MovieService).getVideos(movieId);
  
  return forkJoin([movieDetails$, credits$, videos$]);
};

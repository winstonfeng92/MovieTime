import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieCacheService {

  constructor() { }

  private movies: Array<Movie> = [];
  private currentPage: number = 1;

  setMovies(movies: Array<Movie>, page: number): void {
    this.movies = movies;
    this.currentPage = page;
  }

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
}

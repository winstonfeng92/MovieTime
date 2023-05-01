import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  page: number = 1;
  constructor(private movieService:MovieService) {
  }
  public movieList: Array<Movie> = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies(this.page).subscribe((movies) => {
      console.log(movies);
      console.log(this.page)
      this.movieList = [...this.movieList, ...movies];
      this.page++;
    });
  }

  onScroll(): void {
    this.loadMovies();
  }

}

//For Async Pipe, I could use this...
// page: number = 1;
// movies$: Observable<Movie[]>;

// constructor(private movieService:MovieService) {
// }

// ngOnInit(): void {
//   this.loadMovies();
// }

// loadMovies(): void {
//   this.movies$ = this.movieService.getMovies(this.page);
//   this.page++;
// }

// onScroll(): void {
//   this.loadMovies();
// }
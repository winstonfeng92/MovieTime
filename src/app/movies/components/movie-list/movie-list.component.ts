import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieCacheService } from 'src/app/services/movie-cache.service';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  constructor(
    private movieService:MovieService,
    private movieCacheService: MovieCacheService
    ) {
  }
  public movieList: Array<Movie> = [];
  page: number = 1;


  ngOnInit(): void {
        // Try to load movies from the cache first
        this.movieList = this.movieCacheService.getMovies();
        this.page = this.movieCacheService.getCurrentPage();


        // If cache is empty, fetch movies from the API
        if (this.movieList.length === 0) {
          this.loadMovies();
        }
    
  }

  loadMovies(): void {
    this.movieService.getMovies(this.page).subscribe((movies) => {
      console.log(movies);
      console.log(this.page)
      this.movieList = [...this.movieList, ...movies];
      this.page++;
      this.movieCacheService.setMovies(this.movieList, this.page);
    });
  }

  onScroll(): void {
    this.loadMovies();
  }

}

//For Async Pipe, I could use this...but it wouldn't 
//do a great job with inifinite scroll

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
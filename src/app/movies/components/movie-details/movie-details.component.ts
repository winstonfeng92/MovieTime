import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Cast } from 'src/app/models/cast';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie: Movie | undefined;
  castList: Cast[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.movieService.getMovieDetails(movieId).subscribe(movie => {
        console.log(movie);
        this.movie = movie;
      });
      this.movieService.getCredits(movieId).subscribe(cast => {
        console.log(cast)
        this.castList = cast;
      });
    });


  }
}

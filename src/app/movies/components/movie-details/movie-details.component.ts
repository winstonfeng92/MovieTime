import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Cast } from 'src/app/models/cast';
import { Video } from 'src/app/models/video';
import { TrailerDialogComponent } from '../trailer-dialog/trailer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie: Movie | undefined;
  castList: Cast[] | undefined;
  videos: Video[] | undefined; // Array to store the videos returned by the API
  currentVideoIndex: number = 0; // Index of the currently displayed video

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private dialog: MatDialog,

  ) {}

  openVideoPlayerDialog(initialVideoIndex: number): void {
    const dialogRef = this.dialog.open(TrailerDialogComponent, {
      data: { videos: this.videos, initialVideoIndex },
      // width: '800px',
      // height: '400px'
    });
  }

  ngOnInit(): void {
    console.log('detail initializing')
    this.route.data.subscribe(data => {
      const [movie, cast, videos] = data['movie'];
      this.movie = movie;
      this.castList = cast;
      this.videos = videos;
    });

    // this.route.params.subscribe(params => {
    //   const movieId = params['id'];
    //   this.movieService.getMovieDetails(movieId).subscribe(movie => {
    //     this.movie = movie;
    //   });
    //   this.movieService.getCredits(movieId).subscribe(cast => {
    //     this.castList = cast;
    //   });

    //   this.movieService.getVideos(movieId).subscribe(video => {
    //     this.videos = video;
    //   });
    // });


  }
}

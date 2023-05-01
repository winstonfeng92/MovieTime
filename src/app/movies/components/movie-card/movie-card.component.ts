import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  
  @Input() movie?: Movie;


  fightClubMovie: Movie = {
    title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy...",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    genres: [18, 53, 35],
    id: 550,
    imdb_id: "tt0137523",
    release_date: "1999-10-15",
    original_language: "en",
    video: false,
    vote_average: 8.433,
    vote_count: 26290
  };

}

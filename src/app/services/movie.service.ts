import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cast } from '../models/cast';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private endpoint = 'https://api.themoviedb.org/3';
  private apiKey = 'e9753e47d9644fdd3d4d353165a6cf41';

  constructor(private http: HttpClient) { }


  getMovies(page?: number): Observable<Movie[]> {
    let params = new HttpParams();

    if (page) {
    params = params.set('page', page);
    }
    params.set('include_adult', false);
    params.set('sort_by', 'popularity.desc');

    // const params = {
    //   api_key: this.apiKey,
    //   language: 'en-US',
    //   sort_by: 'popularity.desc',
    //   include_adult: 'false',
    //   include_video: 'false',
    //   page: '1',
    // };
    const url = `${this.endpoint}/discover/movie?api_key=${this.apiKey}`;
    console.log(url);
    return this.http.get<{ results: Movie[] }>(url, {params: params}).pipe(
      map((response) => response.results)
    );  
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const url = `${this.endpoint}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getCredits(movieId: number): Observable<Cast[]> {
    const url = `${this.endpoint}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<{ cast: Cast[] }>(url).pipe(
      map((response) => response.cast)
    );
  }

  getVideos(movieId: number): Observable<any[]> {
    const url = `${this.endpoint}/movie/${movieId}/videos?api_key=${this.apiKey}`;
    return this.http.get<{ results: any[] }>(url).pipe(
      map((response) => response.results)
    );
  }


}

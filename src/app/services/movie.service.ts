import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';



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
    );  }
}

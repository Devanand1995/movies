import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MovieCredits, MovieDto, MovieImages, Movies, MovieVideoDto } from '../Models/movies';
import { of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
baseURL:string ='https://api.themoviedb.org/3';
apiKey:string='d9fae6279ec0271dc52272762e089d51'; 
  constructor(private http:HttpClient) { }

  getmovies(type:string='upcoming',count:number=12){
    return this.http.get<MovieDto>(
      `${this.baseURL}/movie/${type}?api_key=${this.apiKey}`
      ).pipe(switchMap(res=>{ 
        return of(res.results.slice(0,count));
      }));
  }

  searchMovies(page:number,searchValue?:string){
    const uri=searchValue?'/search/movie':'/movie/popular'
    return this.http.get<MovieDto>(
      `${this.baseURL}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      ).pipe(switchMap(res=>{ 
        return of(res.results);
      }));
  }

  getMovieVideos(id:string){
    return this.http.get<MovieVideoDto>(
      `${this.baseURL}/movie/${id}/videos?api_key=${this.apiKey}`
      ).pipe(switchMap(res=>{ 
        return of(res.results);
      }));
  }

  getmovie(id:string){
    return this.http.get<Movies>(
      `${this.baseURL}/movie/${id}?api_key=${this.apiKey}`
      );
  }

  getMovieImages(id:string){
    return this.http.get<MovieImages>(
      `${this.baseURL}/movie/${id}/images?api_key=${this.apiKey}`
      );
  }

  getMovieCredits(id:string){
    return this.http.get<MovieCredits>(
      `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`
      );
  }

  

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { MovieCredits, MovieImages, Movies, MovieVideo } from 'src/app/Models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit,OnDestroy{


  movie:Movies|null=null;
  movieVideos:MovieVideo[]=[];
movieImages: MovieImages |null=null;
movieCredits: MovieCredits |null=null;
  constructor(private route :ActivatedRoute,private movieService:MoviesService){

  }
  ngOnDestroy(): void {
    console.log('Compobnent Destroyed');
    
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id})=>{
      console.log(id
        );
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    })
  }
  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe(
      (movieVideoData)=>{
this.movieVideos=movieVideoData;
      }
    );
  }


  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe(
      (movieImageDate)=>{
this.movieImages=movieImageDate;
      });
  }
  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe(
      (movieImageDate)=>{
this.movieCredits=movieImageDate;
      });
  }

  getMovie(id:string){
    this.movieService.getmovie(id).subscribe((movieData)=>{
      this.movie=movieData;
      console.log(this.movie
        );
      
    });
  }

}

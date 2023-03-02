import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
movies:any=[];
popularMovies:any=[];
upcomingMovies:any=[];
topRatedMovies:any=[];
constructor(private moviesService:MoviesService){

}
  ngOnInit(): void {
   this.moviesService.getmovies('popular').subscribe(
    (movies)=>{
      this.popularMovies=movies; 
      console.log(this.popularMovies
        );
      
    })
    this.moviesService.getmovies('top_rated').subscribe(
      (movies)=>{
        this.topRatedMovies=movies; 
        console.log(this.topRatedMovies
          );
        
      })
      this.moviesService.getmovies('upcoming').subscribe(
        (movies)=>{
          this.upcomingMovies=movies; 
          console.log(this.upcomingMovies
            );
          
        })
  }
}

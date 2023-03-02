import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
paginate(event: any) {
  console.log(event);
  if(this.searchValue)
  this.getPagedMovies(event.page+1,this.searchValue);
  else
  this.getPagedMovies(event.page+1);
  
}

  movies:Movies[]=[];
  searchValue:string|null=null;
  constructor(private moviService:MoviesService){}
 
  ngOnInit(): void {
    
    this.getPagedMovies(1);
  }
  getPagedMovies(page:number,searchKeyword?:string){
    this.moviService.searchMovies(page,searchKeyword).subscribe(
      (movies)=>{this.movies=movies}
    )
  }

  seachMovies(){
    if(this.searchValue)
    this.getPagedMovies(1,this.searchValue);
    console.log(this.searchValue);
    
  }



}

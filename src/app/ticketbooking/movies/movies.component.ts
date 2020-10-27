import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MovieService } from './../movie.service';
import{map} from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie$;
  search;
  tempSearch;
  language=true;
  genre=false;
  format=false;
  movie=[];
  available=false;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
  }
  toggleLanguage()
  {
    this.language=!this.language;
  }
  toggleGeners()
  {
    this.genre=!this.genre;
  }
  toggleFormat()
  {
    this.format=!this.format;
  }
  onSearch()
  {
    this.available=true;
    this.search=this.tempSearch;
    this.movie=[];
    from(this.movieService.getMovies()).pipe(map(movie =>{
      for(var i=0;i<12;i++)
      {
        if(movie[i].name===this.search)
        {
          this.movie.push(movie[i]);
          this.available=false;
          break;
        }
      }
    })).subscribe();
    if(this.movie){
      this.movie$=this.movie;
      console.log(this.movie$);
    }
  }
  reload()
  {
    window.location.reload();
  }
}

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
  language=true;
  genre=false;
  format=false;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe(console.log);
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
}

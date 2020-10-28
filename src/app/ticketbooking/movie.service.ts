import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
movie$;
  constructor(private http: HttpClient) { }
  getMovies()
  {
    return this.http.get('/api/movies');
  }
  getMovie(id){
    return this.http.get(`/api/movies/${id}`);
  }
  setSearched(movie){
    this.movie$=movie;
  }
  getSearched(){
    if(this.movie$)
    return this.movie$;
  }
  getLanguage(language){
    return this.http.get(`/api/movies/filterLanguage/${language}`);
  }
  getGenre(genre)
  {
    return this.http.get(`/api/movies/filterGenre/${genre}`);
  }
  getFormat(format)
  {
    return this.http.get(`/api//movies/filterFormat/${format}`);
  }
}

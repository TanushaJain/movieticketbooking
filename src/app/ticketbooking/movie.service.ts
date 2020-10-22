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
    return this.http.get('https://jsonblob.com/api/66b7ae2b-0dfe-11eb-a6df-73610c6939a8');
  }
  getMovie(id){
    return this.http.get(`https://jsonblob.com/api/${id}`);
  }
}

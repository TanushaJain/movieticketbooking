import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MovieService } from './../movie.service';
import{map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie$;
  loader=true;
  search;
  tempSearch;
  language=true;
  genre=false;
  format=false;
  movie=[];
  available=false;
  filterFormat=[false,false];
  filterLanguage=[false,false,false,false];
  filterGenre=[false,false,false,false,false,false,false,false,false,false];
  cityName;
  selectedCity=[false,false,false,false,false,false,false];
  cities=["NCR","Chennai","Mumbai","Chandigarh","Bangalore","Hyderabad","Ahembdabad"];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    const name1=this.route.snapshot.paramMap.get('city');
    if(name1)
    {
      if(name1==='ncr')
      {
        this.cityName="NCR"
      }
      else
      {
        this.cityName=name1.charAt(0).toUpperCase() + name1.slice(1);
      }
    }
    else{
      this.cityName="Bangalore";
    }
    this.selectedCity[this.cities.indexOf(this.cityName)]=true;
    if(document.readyState)
    {
      this.loader=false;
    }
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
      from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
  }
  filter(language,index)
  {
    this.filterLanguage[index]=!this.filterLanguage[index];
    if(this.filterLanguage[index])
    {from(this.movieService.getLanguage(language)).subscribe(response=> {
      this.movie$=response;
    });}
    else{
      from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    }
    
  }
  filterG(genre,index)
  {
    this.filterGenre[index]=!this.filterGenre[index];
    if(this.filterGenre[index])
    {from(this.movieService.getGenre(genre)).subscribe(response=> {
      this.movie$=response;
    });}
    else{
      from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    }
  }
  filterF(format,index)
  {
    this.filterFormat[index]=!this.filterFormat[index];
    if(this.filterFormat[index])
    {from(this.movieService.getFormat(format)).subscribe(response=> {
      this.movie$=response;
    });}
    else{
      from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    }
  }
  clearGenre()
  {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    this.filterGenre.forEach(element => {
      element=false;
    });
  }
  clearFormat()
  {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    this.filterFormat.forEach(element => {
      element=false;
    });
  }
  clearLanguage()
  {
    from(this.movieService.getMovies()).pipe(map(movie => this.movie$=movie)).subscribe();
    this.filterLanguage.forEach(element => {
      element=false;
    });
  }
  city(name){
    window.location.replace(`movies/explore/${name}`)
  }
 
}

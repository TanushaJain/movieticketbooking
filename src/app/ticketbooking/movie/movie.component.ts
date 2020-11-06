import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
idobj:object;
id;
movieName;
movie;
length;
rate=0;
summary=true;
review=false;
critic=false;
active=[false,false,false,false,false];
selected = 0;
  hovered = 0;
  cityName;
  readonly = false;
  constructor(private movieservice: MovieService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
    this.movieName=name.toString();
   from(this.movieservice.getMovie(this.movieName)).subscribe(response=> {
     this.movie=response;
   });
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
  }
  rated(id){
    this.active[id-1]=!this.active[id-1];
    if(this.active[id-1])
    {
      this.rate=id;
      if(id>1){
        for(let i=0;i<id-1;i++)
        {
          this.active[i]=true;
        }
      }
    }
    else{
      this.rate=id-1;
      for(let i=id;i<5;i++)
        {
          this.active[i]=false;
        }
   }
    
  }
  toggleSummary()
  {
    this.summary=true;
    this.review=false;
    this.critic=false;
  }
  toggleCritic()
  {
    this.summary=false;
    this.review=false;
    this.critic=true;
  }
  toggleReview()
  {
    this.summary=false;
    this.review=true;
    this.critic=false;
  }
}

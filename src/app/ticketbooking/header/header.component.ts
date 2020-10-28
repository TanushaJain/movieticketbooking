import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { map, toArray, filter } from 'rxjs/operators';
import { MovieService } from './../movie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  idobj:object;
id;
movie;
length;
  constructor(private movieservice: MovieService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
   from(this.movieservice.getMovie(name.toString())).subscribe(response=> {
     this.movie=response;
   });
  }

}

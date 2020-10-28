import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { map, toArray, filter } from 'rxjs/operators';
import { MovieService } from './../movie.service';
import { CinemasdataService } from './../cinemasdata.service';


@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  idobj:object;
id;
movie;
length;
month;
year;
date$;
seating;
selected=[];
total=0;
isClassic=true;
length1=0;
  constructor(private cinemadata: CinemasdataService,private movieservice: MovieService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
   from(this.movieservice.getMovie(name.toString())).subscribe(response=> {
     this.movie=response;
   });
   var m=new Date().getMonth()+1;
    this.month=this.getMonth(m.toString());
    this.year=new Date().getFullYear();
    console.log(this.year);
    const cinema=this.route.snapshot.paramMap.get('cinema');
    console.log(cinema);
    this.date$=this.cinemadata.getDate();
    if(this.date$.price.prime)
    {
      this.isClassic=true;
      this.seating=this.cinemadata.getClassic();
    }
    else{
      this.isClassic=false;
      this.seating=this.cinemadata.getRecliner();
    }
    console.log(this.date$);
  }
  getMonth(m)
  {
    var month;
    switch(m)
    {
      case "1":month="Jan";break;
      case "2":month="Feb";break;
      case "3":month="Mar";break;
      case "4":month="Apr";break;
      case "5":month="May";break;
      case "6":month="Jun";break;
      case "7":month="Jul";break;
      case "8":month="Aug";break;
      case "9":month="Sept";break;
      case "10":month="Oct";break;
      case "11":month="Nov";break;
      case "12":month="Dec";      
    }
    return month;
  }
  isSelected(event,row,column){
    var seat=row+column;
    if(this.selected.indexOf(seat))
    {
      event.target.ownerSVGElement.attributes.fill.value='#03AA8E';
      this.selected.push(seat);
      if(!this.isClassic){
        if(row>="A"&&row<="I")
      {
        console.log("in")
        this.total=this.total+99;
      }
      else{
        this.total=this.total+149;
      }
    }
    else{
      if(row>="A"&&row<="N")
      {
        console.log("in")
        this.total=this.total+99;
      }
      else{
        this.total=this.total+149;
      }
    }
    }
    else{
      var index=this.selected.indexOf(seat);
      this.selected.splice(index,1);
      event.target.ownerSVGElement.attributes.fill.value='lightgray';
      if(!this.isClassic){
        if(row>="A"&&row<="I")
      {
        this.total=this.total-99;
      }
      else{
        this.total=this.total-149;
      }
    }
    else{
      if(row>="A"&&row<="N")
      {
        this.total=this.total-99;
      }
      else{
        this.total=this.total-149;
      }
    }
    }
    console.log(this.total);
    this.length1=this.selected.length;
  }  
}

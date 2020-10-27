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
  movies=[{
    "name":"Dunkirk",
    "id":"6dd38b42-0e98-11eb-9726-0f9020b1c3af"
  },
  {
    "name":"Once Upon a Time in Hollywood",
    "id":"22f6dc87-0e9d-11eb-9726-83f749a79d33"
  },
  {
    "name":"Inception",
    "id":"81dd99cb-0e9d-11eb-9726-9fe0c8f24a8e"
  },
  {
    "name":"Avengers Infinity War",
    "id":"de70f12e-0e9d-11eb-9726-35994fad0b94"
  },
  {
    "name":"Titanic",
    "id":"193b24c4-0e9e-11eb-9726-ed1fee7dad5e"
  },
  {
    "name":"Harry Potter and  the Half-Blood Prince",
    "id":"9de4a19e-0e9e-11eb-9726-95d13fe2b0c6"
  },
  {
    "name":"The Notebook",
    "id":"c6001e2f-0e9e-11eb-9726-39545dd24ebc"
  },
  {
    "name":"We're The Millers",
    "id":"f2802d6d-0e9e-11eb-9726-91a6b2d6a371"
  },
  {
    "name":"Now You See Me",
    "id":"1ce12c45-0e9f-11eb-9726-91cec7b19ce6"
  },
  {
    "name":"Ocean's 8",
    "id":"4fb6a1b6-0e9f-11eb-9726-7784dc314908"
  },
  {
    "name":"Love Actually",
    "id":"b22c03f5-0e9f-11eb-9726-5b605d26f7fb"
  },
  {
    "name":"Love & Other Drugs",
    "id":"de320128-0e9f-11eb-9726-df3469a7c738"
  }];
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
    console.log(name);
   this.idobj= this.movies.filter(x => x.name===name);
   this.id=this.idobj[0].id
   console.log(this.id);
   from(this.movieservice.getMovie(this.id)).subscribe(response=> {
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

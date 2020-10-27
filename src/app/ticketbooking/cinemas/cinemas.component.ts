import { Component, OnInit } from '@angular/core';
import { CinemasdataService } from './../cinemasdata.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
  dates={
    today:{
      date:0,
      day:"Sun",
      isSelected:true
    },
    tomorrow:{
      date:0,
      day:"Sun",
      isSelected:false
    },
  }
  cinemas$;
  movieName;
  constructor(private cinemadata: CinemasdataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
    this.movieName=name;
    var day = new Date().getUTCDay() // 0(Sunday) to 6(Saturday).
    this.dates.today.date = new Date().getUTCDate();
    this.dates.today.day=this.getDay(day);
    var m=new Date().getMonth()+1;
    var month=m.toString();
    if(this.dates.today.date<=29)
    {
      this.dates.tomorrow.date=this.dates.today.date+1;
    }
    else{
      if(this.dates.today.date==30){
        if((month=="1")||(month=="3")||(month=="5")||(month=="7")||(month=="8")||(month=="10")||(month=="12"))
      {
        this.dates.tomorrow.date=this.dates.today.date+1;
      }
      else{
        this.dates.tomorrow.date=1;
      }
      }
      else{
        this.dates.tomorrow.date=1;
      }
    }
    if(day+1==7)
    {
      this.dates.tomorrow.day="Sun";
    }
    else{
      this.dates.tomorrow.day=this.getDay(day+1);
    }
    from(this.cinemadata.getCinemas()).pipe(map(cinema => this.cinemas$=cinema)).subscribe(console.log);
  }
  getDay(day){
    var day1;
    switch(day){
      case 0: day1="Sun";break;
      case 1: day1="Mon";break;
      case 2: day1="Tues";break;
      case 3: day1="Wed";break;
      case 4: day1="Thru";break;
      case 5: day1="Fri";break;
      default: day1="Sat";
    }
    return day1;
  }
  time(event,address,price){
    var selected=event.originalTarget.attributes.value.value;
    if(this.dates.today.isSelected)
    {
      this.cinemadata.setDate(this.dates.today.date,this.dates.today.day,selected,address,price);
    }
    else{
      this.cinemadata.setDate(this.dates.tomorrow.date,this.dates.tomorrow.day,selected,address,price);
    }
  }
  selectedDate(event){
    console.log(event.target.parentElement.attributes.value.value)
    var selected=event.target.parentElement.attributes.value.value;
    if(selected=="tomorrow")
    {
      this.dates.tomorrow.isSelected=true;
      this.dates.today.isSelected=false;
    }
    else{
      this.dates.tomorrow.isSelected=false;
      this.dates.today.isSelected=true;
    }
  }
}

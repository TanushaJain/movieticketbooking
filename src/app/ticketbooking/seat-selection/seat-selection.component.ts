import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MovieService } from './../movie.service';
import { CinemasdataService } from './../cinemasdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from './../ticket.service';


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
isClassic=false;
length1=0;
seatType;
amount;
gst;
  constructor(private cinemadata: CinemasdataService,private movieservice: MovieService,private route: ActivatedRoute,private modalService: NgbModal, private ticket: TicketService) { }

  ngOnInit(): void {
    const name=this.route.snapshot.paramMap.get('name');
   from(this.movieservice.getMovie(name.toString())).subscribe(response=> {
     this.movie=response;
   });
   var m=new Date().getMonth()+1;
    this.month=this.getMonth(m.toString());
    this.year=new Date().getFullYear();
    const cinema=this.route.snapshot.paramMap.get('cinema');
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
        this.total=this.total+99;
        this.seatType="Prime";
      }
      else{
        this.total=this.total+149;
        this.seatType="recliner"
      }
    }
    else{
      if(row>="A"&&row<="N")
      {
        this.total=this.total+99;
        if(row>="A"&&row<="I")
      {
        this.seatType="Classic";
      }
        else{
          this.seatType="Prime";
        }
      }
      else{
        this.total=this.total+149;
        this.seatType="Recliner";
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
    this.seatType="";
    }
    this.gst=this.total*0.18;
    this.amount=this.total+this.gst+38;
    this.length1=this.selected.length;
  }  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  proceed(){
    var date=this.date$.day+" "+this.date$.date+" "+this.month+" "+this.year+" "+this.date$.time;
    const ticketCart={
      movie:this.movie.name,
      date:date,
      seatType:this.seatType,
      seatsSelected:this.selected,
      audi:"AUD 1",
      total:this.total,
      gst:0.18,
      bookingCharge:38
    };
    this.ticket.postAPIData("ticket",ticketCart).subscribe();
  }
}

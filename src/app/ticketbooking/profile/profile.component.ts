import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  rnothing=false;
  mnothing=false;
  rlist=[{
    file:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    name:"Name of the Restaurant",
    about:"Address of the Restaurant"
  }]
  mlist=[
  {
    file:"https://boxofficeindia.co.in/sites/default/files/sha.in_.jpg",
    name:"Name of the movie",
    about:"Cast of the movie"
  }
];
type="Grid";
rtoggle=false;
toggle=true;
mtoggle=false;
  constructor() { }

  ngOnInit(): void {
    if(this.rlist.length==0)
    {
      this.rnothing=true;
    }
    if(this.mlist.length==0)
    {
      this.mnothing=true;
    }
  }
  onToggle(type)
  {
    if(type=="Grid")
    {
      this.type="List";
      this.toggle=false;
    }
    else{
      this.type="Grid";
      this.toggle=true;
    }
  }
  restrauntsToggle()
  {
    this.rtoggle=!this.rtoggle;
  }
  moviesToggle()
  {
    this.mtoggle=!this.mtoggle;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemasdataService {
  dates={
    date:0,
    day:"Sun",
    time:"10:00",
    address:"",
    price:[]
  };
  constructor(private http: HttpClient) { }
  getCinemas(city){
    city=city.toLowerCase();
    return this.http.get(`/api/cinemas/${city}`);
  }
  setDate(date, day,time,address,price){
    this.dates.date=date;
    this.dates.day=day;
    this.dates.time=time;
    this.dates.address=address;
    this.dates.price=price;
  }
  getDate()
  {
    return this.dates;
  }
  getClassic()
  {
    var row1=['A','B','C','D','E','F','G','H','I'];
    var row2=['J','K','L','M','N'];
    var row3=['O','P'];
    var column3=[1,2,3,4,5,6,7,8,9,10,11,12];
    var column1=[1,2,3,4,5,6,7,8];
    var column2=[9,10,11,12,13,14,15,16,17,18,19,20];
    var column4=[13,14,15,16,17,18,19,20,21,22,23,24];
    var column5=[1,2,3,4,5,6,7,8,9,10,11,12,13];
    var column6=[14,15,16,17,18,19,20,21,22,23,24,25,26];
    var seating=[row1,row2,row3,column1,column2,column3,column4,column5,column6];
    return seating;
  }
  getRecliner()
  {
    var row1=['A','B','C','D','E','F','G','H','I'];
    var row3=['J','K'];
    var column5=[1,2,3,4,5,6,7,8,9,10,11,12,13];
    var column6=[14,15,16,17,18,19,20,21,22,23,24,25,26];
    var seating=[row1,row3,column5,column6];
    return seating;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  postAPIData(url,content){
    return this.http.post(`/api/${url}`,content);
  }
  getTicket()
  {
    return this.http.get("/api/getticket");
  }
}

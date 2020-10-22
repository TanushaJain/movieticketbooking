import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketbookingModule } from './ticketbooking/ticketbooking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    TicketbookingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

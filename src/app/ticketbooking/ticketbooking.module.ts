import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TicketbookingRoutingModule } from './ticketbooking-routing.module';
import { TicketbookingComponent } from './ticketbooking.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { HeaderComponent } from './header/header.component';
import { CinemasdataService } from './cinemasdata.service';
import {SeatSelectionComponent} from './seat-selection/seat-selection.component';
import {NgbPaginationModule, NgbAlertModule,NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketbookingComponent,
    MoviesComponent, 
    MovieComponent, 
    CinemasComponent, 
    HeaderComponent,
    SeatSelectionComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule,
    NgbTooltipModule,
    TicketbookingRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'movies',component:MoviesComponent},
      {path:'movies/:name', component:MovieComponent},
      {path:"movies/:name/cinemas", component:CinemasComponent},
      {path:"movies/:name/cinemas/:cinema",component:SeatSelectionComponent},
    ])
  ],
  exports:[
    TicketbookingComponent
  ],
  providers: [MovieService,CinemasdataService]
})
export class TicketbookingModule { }

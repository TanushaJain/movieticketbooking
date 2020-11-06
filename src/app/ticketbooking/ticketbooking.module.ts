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
import {NgbPaginationModule, NgbAlertModule,NgbTooltipModule,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component'; 
@NgModule({
  declarations: [
    TicketbookingComponent,
    MoviesComponent, 
    MovieComponent, 
    CinemasComponent, 
    HeaderComponent,
    SeatSelectionComponent,
    DetailsComponent,
    ProfileComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    NgbPaginationModule, NgbAlertModule,
    NgbTooltipModule,
    TicketbookingRoutingModule,
    NgbDropdownModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'movies',component:MoviesComponent},
      {path:'profile',component:ProfileComponent},
      {path:'details',component:DetailsComponent},
      {path:'movies/explore/:city', component:MoviesComponent},
      {path:'movies/explore/:city/:name', component:MovieComponent},
      {path:"movies/explore/:city/:name/cinemas", component:CinemasComponent},
      {path:"movies/explore/:city/:name/cinemas/:cinema",component:SeatSelectionComponent},
    ])
  ],
  exports:[
    TicketbookingComponent
  ],
  providers: [MovieService,CinemasdataService]
})
export class TicketbookingModule { }

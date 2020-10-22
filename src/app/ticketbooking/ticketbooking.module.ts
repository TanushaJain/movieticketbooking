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
@NgModule({
  declarations: [TicketbookingComponent, MoviesComponent, MovieComponent, CinemasComponent, HeaderComponent],
  imports: [
CommonModule,
    TicketbookingRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:MoviesComponent},
      {path:'movies',component:MoviesComponent},
      {path:'movies/:name', component:MovieComponent},
      {path:"movies/:name/cinemas", component:CinemasComponent}
    ])
  ],
  exports:[
    TicketbookingComponent
  ],
  providers: [MovieService]
})
export class TicketbookingModule { }

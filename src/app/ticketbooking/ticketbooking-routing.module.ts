import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketbookingComponent } from './ticketbooking.component';

const routes: Routes = [{ path: '', component: TicketbookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketbookingRoutingModule { }

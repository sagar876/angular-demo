import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


// const routes = [
//   {path: 'events', component: EventsComponent },
//   {path: 'songs', component: SongsComponent},
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'login', component: LoginComponent},
//   indexRoute,
//   fallbackRoute
//  ];
@NgModule({
  imports: [
    //RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule] //ADDED

})
export class AppRoutingModule { }

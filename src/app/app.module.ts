import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {SongslistComponent} from './songslist/songslist.component';
import {HttpModule} from '@angular/http';
import{ReactiveFormsModule} from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { EventsComponent } from './events/events.component';
import { TonightslistComponent } from './tonightslist/tonightslist.component';
import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'song-list',component: SongslistComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path:'create-user',
    component:CreateuserComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SongslistComponent,
    UsersComponent,
    CreateuserComponent,
    EventsComponent,
    TonightslistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { 


}

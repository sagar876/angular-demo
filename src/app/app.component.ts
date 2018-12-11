import { Component } from '@angular/core';
import {SongList } from '../Models/SongList'

import { map } from 'rxjs/operators';
import { Http, Response, Headers} from "@angular/http";
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isListVisible=true;
  showList(){
    this.isListVisible= !this.isListVisible;
  }
}

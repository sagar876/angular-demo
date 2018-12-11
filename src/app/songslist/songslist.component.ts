import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response, Headers} from "@angular/http";
import { RequestOptions } from '@angular/http';
import {SongList } from '../../Models/SongList';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css']
})
@Pipe({
  name: 'filterPipe'
})
export class SongslistComponent {
  searchToken: string;
  songs:Array<SongList> = [];
  private url = "http://test.ninestack.com/Karaoke_API/api/songs";
  constructor(private http: Http) {   
    this.getSongs();
    this.getResponse();
  }


  ngOnInit() {

  }

  getResponse(){
    return this.http.get(this.url) 
     .pipe(map((response: any) => response.json()));  
   }
   
   getSongs(){
     this.getResponse().subscribe(data => {
       this.songs= data;
       console.log(this.songs);
     })
   }
}

import { Component, OnInit } from '@angular/core';
import { Users } from 'src/Models/Users';

import { map } from 'rxjs/operators';
import { Http, Response, Headers} from "@angular/http";
import { RequestOptions } from '@angular/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<Users> = [];
  private url = "http://test.ninestack.com/Karaoke_API/api/user";
  constructor(private http: Http) {   
    this.getSongs();
    this.getResponse();
  }

  getResponse(){
    return this.http.get(this.url) 
     .pipe(map((response: any) => response.json()));  
   }
   
   getSongs(){
     this.getResponse().subscribe(data => {
       this.users= data;
       console.log(this.users);
     })
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Events } from 'src/Models/Events';
import { map } from 'rxjs/operators';
import { Http, Response, Headers} from "@angular/http";
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'parent',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {


  numOfChildren = 3;
  childNames = ['Child 1', 'Child 2','Child 3'];


  events:Array<Events>
  private url = "http://test.ninestack.com/Karaoke_API/api/admin/event";
  constructor(private http: Http,private router: Router) {   
    this.getEvents();
    this.getResponse();
  }


  getResponse(){
    return this.http.get(this.url) 
     .pipe(map((response: any) => response.json()));  
   }
   
   getEvents(){
     this.getResponse().subscribe(data => {
       this.events= data;
       //console.log(this.events);
     })
   }

  
   isEventAvailaible = true;
   getPendingSongs(id:number){
    const postedData ={
      "eventId": 1,
      "status":0
    }
    this.isEventAvailaible = !this.isEventAvailaible;
    return this.http.post('http://test.ninestack.com/Karaoke_API/api/Admin/status', postedData).subscribe(result => {
      console.log(result);
    }, error => console.log('There was an error: '));
    //this.router.navigateByUrl('/pendingsongs', { queryParams: { page: 1 } } );
   }



  ngOnInit() {
  
    // for(let i = 0; i < this.numOfChildren; i++) {
    //   this.collOfChildren.push(new ChildcomponentComponent(this.childNames[i],5));
    //   console.log(this.collOfChildren);
    // }

  


  }

}

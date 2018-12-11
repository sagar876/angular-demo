import { Component, OnInit } from '@angular/core';
import { CreateUser } from 'src/Models/CreateUser';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { Http, Response, Headers,RequestMethod} from "@angular/http";


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private fb : FormBuilder,private http: Http) { 
    this.createForm();
  }


  user: Object;


  tripform:FormGroup;
  passdata: Object;
  createForm() {
    this.tripform = this.fb.group({
      name: new FormControl('',Validators.required),
      email:new FormControl('', Validators.required),
      pass:new FormControl('',Validators.required),
      mob: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
    });
  }
  submitForm(){
    let name = this.tripform.value.name;
    let email = this.tripform.value.email;
    let pass = this.tripform.value.pass;
    let mob = this.tripform.value.mob;
    let image = this.tripform.value.image;


    // let name = "test event";
    // let eventDate = "07-03-2018";
    // let startTime = "21:00";
    // let endTime = "23:00";
    // let dj = "dj sagar";
    // let eventImage="image";
    
    // const req = this.http.post('http://kdj.kwrk.in/update_pending.php', {
    //   id: 317,
    //   status: 5,
    // })
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
    
  const headers = new Headers({ 'Content-Type': 'application/json; charset:utf-8' });
  const options = new RequestOptions({ headers: headers });
  const postedData = { "name":name , "email": email, "pwd": pass , "phoneNumber":mob, "image":image};
  const data= {
    "name": "dt",
    "pwd": "1234",
    "email": "d@dt.com",
    "phoneNumber": "2147483647",
    "type": "0",
    "image": "https://www.google.com/",
    "status": 0
};

  let body = JSON.stringify(postedData);

  console.log(body);
   
    return this.http.post('http://test.ninestack.com/Karaoke_API/api/User/register', postedData ,options).subscribe(result => {
          console.log(result);
        }, error => console.log('There was an error: '));
  }

  ngOnInit(){

  }

}

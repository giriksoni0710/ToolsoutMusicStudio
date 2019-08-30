import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bookservice-component',
  templateUrl: './bookservice-component.component.html',
  styleUrls: ['./bookservice-component.component.scss']
})
export class BookserviceComponentComponent implements OnInit {

  query1: string;
  done: any;

  constructor(private http: HttpClient) { 

    this.query1 = '';

  }

  ngOnInit() {

    this.done = false;
  }

  sendEmail(name: any, email: any, phone: any, date: any){


    this.done = true;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(date);
    
    const url = 'http://localhost:3000/abc';

    this.http.post(url,{name: name,email: email, phone: phone, data: date}).toPromise().then(data =>{

      // console.log(data);
      console.log("hello");
     
    })

  

  }

}

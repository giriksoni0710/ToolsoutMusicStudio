import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookservice-component',
  templateUrl: './bookservice-component.component.html',
  styleUrls: ['./bookservice-component.component.scss']
})
export class BookserviceComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendEmail(){

   alert("hello");
 
  }

}

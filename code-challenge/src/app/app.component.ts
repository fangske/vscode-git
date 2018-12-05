import { Component, OnInit } from '@angular/core';
import { Url } from './url.model';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})

export class AppComponent implements OnInit{

  urls: Url[];
  call: string = 'https://damiler-getone-api.eu-gb.mybluemix.net/api/mlabs';
  
  userUrl: any[];
  rehashUrl: any[];
  customUrl: any[];

  constructor(private dataService: DataService, private http: HttpClient) { }
  
  ngOnInit() {
    this.dataService.getUrl()
    .subscribe(data => {
      this.urls = data;
    });
  }

  // Teneray condition to check if url exists in database, include regex checks for injection risk
  onSubmit(form: NgForm){

    let data = form.value;

    let userInput = {
        url: data.url
      }

    this.http.post(this.call, userInput)
      .subscribe(response => {

        console.log(response);
      },(err: HttpErrorResponse) => {
        console.log(err);
    });
  }

  // Filter function goes here to return back unhashed url and redirect user with angular routes
  // onSubmit2(form: NgForm){
  //   let data = form.value;

  //   debugger;
  //   let userInput2 = {
  //       url: data.url
  //     }
    
  //   this.http.post(this.call, userInput2)
  //     .subscribe(response => {
  //       debugger;
  //       console.log(response);
  //     },(err: HttpErrorResponse) => {
  //       console.log(err);
  //   });
  // }

  // // Custom logic 
  // onSubmit3(form: NgForm){
  //   let data = form.value;


  //   });
  // }
  
  }
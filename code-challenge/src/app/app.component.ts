import { Component, OnInit } from '@angular/core';
import { Url } from './url.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})

export class AppComponent implements OnInit{

  url$: Url[];

  constructor(private dataService: DataService) {
  }
  
  ngOnInit() {
    return this.dataService.getUrl()
    .subscribe(data => this.url$ = data,
      error => console.log(error))
    }
    
}
import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  coursesObservable: any;
  constructor(private commonService: CommonService ) { }

  ngOnInit() {
    this.coursesObservable = this.commonService.getCourses('/blogs');    
  }

}

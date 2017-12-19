import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  p: number = 1;
  coursesObservable: any;
  constructor(private commonService: CommonService ) { }

  ngOnInit() {
    this.coursesObservable = this.commonService.getCourses('/blogs');
    this.commonService.getUserListing().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // error logic goes here
      }
    )
  }

  onScrollDown () {
      console.log('scrolled down!!')
  }

  onScrollUp () {
    console.log('scrolled up!!')
  }


}

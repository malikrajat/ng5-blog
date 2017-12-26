import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/pairwise';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantsService } from './../constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  
  @Input('pagelocal') whatParentSend: string;
  // Here we have pagelocal name set in html page but in case we do pt want to user that name, we can create alies for that name like here os what parent is sending
  @Output() sendToParent = new EventEmitter();

  title: string;
  description: string;
  headerImage: string;

  constructor(private router: Router, private constant: ConstantsService) {
     
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        let bgImage = constant.constants[event.url].image; 
        let heading = constant.constants[event.url].title; 
        let description = constant.constants[event.url].description; 
        this.headerImage = (bgImage)? bgImage: 'home-bg.jpg';
        this.title = (heading)? heading: 'Angular Blog';
        this.description = (description)? description: 'Start you angualr blog';  
      }
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.whatParentSend,'from input view');   
    this.sendToParent.emit('Hello from chield');
  }
  getUrl(): string {
    return 'url(assets/img/' + this.headerImage + ')';
  }
}

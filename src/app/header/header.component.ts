import { Title } from '@angular/platform-browser/src/browser/title';
import { Component } from '@angular/core';
import 'rxjs/add/operator/pairwise';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantsService } from './../constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

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

  getUrl(): string {
    return 'url(assets/img/' + this.headerImage + ')';
  }
}

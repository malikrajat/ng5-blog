import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  constants: Object;
  constructor() { 
    this.initConstant();
  }
  initConstant() {
    this.constants = {    
      '/': {
        'image': 'home-bg.jpg',
        'title': 'Angular Blog',
        'description': 'Start you angualr blog'
      },
      '/home': {
        'image': 'home-bg.jpg',
        'title': 'Angular Blog',
        'description': 'Start you angualr blog'
      },
      '/about-us': {
        'image': 'about-bg.jpg',
        'title': 'About Me ',
        'description': 'This is what our services.'
      },
      '/sample': {
        'image': 'post-bg.jpg',
        'title': 'Man must explore, and this is exploration at its greatest',
        'description': 'Problems look mighty small from 150 miles up'
      },
      '/contact': {
        'image': 'contact-bg.jpg',
        'title': 'Contact Me',
        'description': 'Have questions? I have answers.'
      },
      'footerText': 'Copyright © Your Website 2017'
    }
    return this.constants
  }
}

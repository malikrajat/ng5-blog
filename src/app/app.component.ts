import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  pageTitle = 'Home page from @input';

  sendfromChield(event) {
    console.log(event);
  }
}

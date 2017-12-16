import { Component } from '@angular/core';
import { ConstantsService } from './../constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerText: String;
  constructor(private constant: ConstantsService) {      
    this.footerText = constant.constants['footerText'];
  }

}

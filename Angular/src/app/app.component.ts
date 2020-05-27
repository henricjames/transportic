import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  label = 'button label';

  buttonClick() {
    console.log('button clicked');
  }
}

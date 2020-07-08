import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {
  private cookieValue: string;
  @Input() visibility: boolean;
  @Output() clicked = new EventEmitter();

  constructor(private cookieService: CookieService) {}

  goToScreen() {
    this.clicked.emit('data from cookie');
  }

  // function to store key on cookie
  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit(): void {
    // declare date and get current date time
    const date = new Date();
    // add 60 minutes to date
    date.setTime(date.getTime() + 60 * 60 * 1000);

    this.cookieService.set('Test', 'Cookie Service', date);
    this.cookieValue = this.cookieService.get('Test');
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  private cookieValue: string;
  @Input()
  visibility: string;

  constructor(private cookieService: CookieService) {}

  goToScreen() {
    this.visibility = 'hidden';
  }

  // function to store key on cookie
  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  ngOnInit(): void {
    this.visibility = 'visible';
    // set 9 sec timeout to show cookie on screen
    setTimeout(() => {
      this.visibility = 'hidden';
    }, 9000);

    // declare date and get current date time
    const date = new Date();
    // add 60 minutes to date
    date.setTime(date.getTime() + 60 * 60 * 1000);

    this.cookieService.set('Test', 'Cookie Service', date);
    this.cookieValue = this.cookieService.get('Test');
  }
}

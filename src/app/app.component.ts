import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute = 'Dashboard';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd){
        switch(event.urlAfterRedirects){
          case "/dashboard":
            this.currentRoute = 'Dashboard'
            break;
          case "/manage-customer":
            this.currentRoute= 'Manage Customers';
            break;
          case "/manage-item":
            this.currentRoute = 'Manage Items';
            break;
          case "/place-order":
            this.currentRoute = 'Place Order';
            break;
          case "/search-order":
            this.currentRoute = 'Search Orders';
            break;
          default:
            this.currentRoute = "Not Found";
            break;
        }
      }
    });
  }
}

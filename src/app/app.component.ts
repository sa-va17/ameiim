import { Component, OnInit } from '@angular/core';
import { Event,Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader = true;
  constructor (private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) =>{
      if (routerEvent instanceof NavigationStart) {
        this.showLoader= true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoader= false;
      }

    });

  }


onClick() {
  this._router.navigate(['register'])
}

}

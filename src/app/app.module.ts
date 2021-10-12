import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbCarouselModule }from 'mdb-angular-ui-kit/carousel';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MdbCarouselModule,
    MdbDropdownModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

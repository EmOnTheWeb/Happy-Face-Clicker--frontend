import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FacesComponent } from './faces/faces.component';
import { AppRoutingModule } from './app-routing.module';

import { FaceService } from './faces/faces.service';

@NgModule({
  declarations: [
    AppComponent,
    FacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule, 
    HttpModule
  ],
  providers: [FaceService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

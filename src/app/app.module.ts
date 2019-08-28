// Angular Core Imports  -------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules  -------------------------------------------------------------

// Angular Material  -----------------------------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './core/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

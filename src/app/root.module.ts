import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { RootComponent } from './root.component';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }

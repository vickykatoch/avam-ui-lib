import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvamDataGridModule } from 'AvamDataGrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvamDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { DataBuilder, Order } from './data-builder';

@Component({
  selector: 'juil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avam-ui-lib';
  orders : Order[] = [];
  private dataBuilder = new DataBuilder();

  
  constructor() {
    this.orders = this.dataBuilder.build(10);
    console.log(this.orders);
  }
}

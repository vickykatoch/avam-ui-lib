import { NgModule } from '@angular/core';
import { AvamDataGridComponent } from './avam-data-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvamDataGridComponent],
  exports: [AvamDataGridComponent]
})
export class AvamDataGridModule { }

import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { Column } from './models/column';

@Component({
  selector: 'lib-AvamDataGrid',
  templateUrl: './avam-data-grid.component.html',
  styleUrls: ['./avam-data-grid.component.scss']
})
export class AvamDataGridComponent implements OnInit {
  @ViewChild('gridBody') gridBody: ElementRef;
  @ViewChild('scrollableWrapper') scrollableWrapper: ElementRef;
  
  @Input() columns: Column[] = [];
  isVisible = true;
  constructor(private elem: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    
    console.log(this.elem.nativeElement.offsetWidth);
    

    const parent = this.renderer.parentNode(this.gridBody.nativeElement);
    const height = parent.offsetHeight;
  }

}

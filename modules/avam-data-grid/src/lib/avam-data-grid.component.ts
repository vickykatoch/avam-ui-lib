import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-AvamDataGrid',
  templateUrl: './avam-data-grid.component.html',
  styleUrls: ['./avam-data-grid.component.scss']
})
export class AvamDataGridComponent implements OnInit {
  @ViewChild('gridBody') gridBody : ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // const height = this.gridBody.nativeElement['offsetHeight'];
    const parent = this.renderer.parentNode(this.gridBody.nativeElement);
    const height = parent.offsetHeight;
    // this.renderer.setStyle(parent,'height', `${height}px`);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvamDataGridComponent } from './avam-data-grid.component';

describe('AvamDataGridComponent', () => {
  let component: AvamDataGridComponent;
  let fixture: ComponentFixture<AvamDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvamDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvamDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

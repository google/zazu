import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerReportComponent } from './viewer-report.component';

describe('ViewerReportComponent', () => {
  let component: ViewerReportComponent;
  let fixture: ComponentFixture<ViewerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

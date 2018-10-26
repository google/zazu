import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerReportListComponent } from './viewer-report-list.component';

describe('ViewerReportListComponent', () => {
  let component: ViewerReportListComponent;
  let fixture: ComponentFixture<ViewerReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

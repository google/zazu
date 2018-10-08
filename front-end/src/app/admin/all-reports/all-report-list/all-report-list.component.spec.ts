import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportListComponent } from './all-report-list.component';

describe('AllReportListComponent', () => {
  let component: AllReportListComponent;
  let fixture: ComponentFixture<AllReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewReportComponent } from './create-new-report.component';

describe('CreateNewReportComponent', () => {
  let component: CreateNewReportComponent;
  let fixture: ComponentFixture<CreateNewReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

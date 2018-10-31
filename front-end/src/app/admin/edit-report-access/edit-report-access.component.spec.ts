import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReportAccessComponent } from './edit-report-access.component';

describe('EditReportAccessComponent', () => {
  let component: EditReportAccessComponent;
  let fixture: ComponentFixture<EditReportAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReportAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReportAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

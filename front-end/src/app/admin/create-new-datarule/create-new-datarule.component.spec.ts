import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDataruleComponent } from './create-new-datarule.component';

describe('CreateNewDataruleComponent', () => {
  let component: CreateNewDataruleComponent;
  let fixture: ComponentFixture<CreateNewDataruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewDataruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewDataruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

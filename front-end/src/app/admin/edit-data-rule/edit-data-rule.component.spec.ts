import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataRuleComponent } from './edit-data-rule.component';

describe('EditDataRuleComponent', () => {
  let component: EditDataRuleComponent;
  let fixture: ComponentFixture<EditDataRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

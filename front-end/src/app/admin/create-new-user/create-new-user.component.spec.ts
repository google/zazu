import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserComponent } from './create-new-user.component';

describe('CreateNewUserComponent', () => {
  let component: CreateNewUserComponent;
  let fixture: ComponentFixture<CreateNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

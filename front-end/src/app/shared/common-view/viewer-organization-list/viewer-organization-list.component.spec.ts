import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerOrganizationListComponent } from './viewer-organization-list.component';

describe('ViewerOrganizationListComponent', () => {
  let component: ViewerOrganizationListComponent;
  let fixture: ComponentFixture<ViewerOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerOrganizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

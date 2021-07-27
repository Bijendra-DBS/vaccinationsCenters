import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineUserListingComponent } from './vaccine-user-listing.component';

describe('VaccineUserListingComponent', () => {
  let component: VaccineUserListingComponent;
  let fixture: ComponentFixture<VaccineUserListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineUserListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineUserListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

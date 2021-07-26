import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCentersDetailsComponent } from './vaccine-centers-details.component';

describe('VaccineCentersDetailsComponent', () => {
  let component: VaccineCentersDetailsComponent;
  let fixture: ComponentFixture<VaccineCentersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineCentersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCentersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedPatientsComponent } from './vaccinated-patients.component';

describe('VaccinatedPatientsComponent', () => {
  let component: VaccinatedPatientsComponent;
  let fixture: ComponentFixture<VaccinatedPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinatedPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

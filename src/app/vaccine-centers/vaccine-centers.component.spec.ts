import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCentersComponent } from './vaccine-centers.component';

describe('VaccineCentersComponent', () => {
  let component: VaccineCentersComponent;
  let fixture: ComponentFixture<VaccineCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDashboardPageComponent } from './center-dashboard-page.component';

describe('CenterDashboardPageComponent', () => {
  let component: CenterDashboardPageComponent;
  let fixture: ComponentFixture<CenterDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

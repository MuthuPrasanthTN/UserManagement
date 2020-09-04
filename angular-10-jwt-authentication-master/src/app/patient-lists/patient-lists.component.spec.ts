import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListsComponent } from './patient-lists.component';

describe('PatientListsComponent', () => {
  let component: PatientListsComponent;
  let fixture: ComponentFixture<PatientListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

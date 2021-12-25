import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCorporatecabComponent } from './cab-corporatecab.component';

describe('CabCorporatecabComponent', () => {
  let component: CabCorporatecabComponent;
  let fixture: ComponentFixture<CabCorporatecabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabCorporatecabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCorporatecabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

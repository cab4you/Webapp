import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalcabComponent } from './rentalcab.component';

describe('RentalcabComponent', () => {
  let component: RentalcabComponent;
  let fixture: ComponentFixture<RentalcabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalcabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

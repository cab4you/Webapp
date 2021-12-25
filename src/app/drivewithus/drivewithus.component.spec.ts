import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivewithusComponent } from './drivewithus.component';

describe('DrivewithusComponent', () => {
  let component: DrivewithusComponent;
  let fixture: ComponentFixture<DrivewithusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivewithusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivewithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

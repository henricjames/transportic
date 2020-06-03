import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeAddComponent } from './pincode-add.component';

describe('PincodeAddComponent', () => {
  let component: PincodeAddComponent;
  let fixture: ComponentFixture<PincodeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

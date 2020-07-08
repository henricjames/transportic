import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeHeaderComponent } from './pincode-header.component';

describe('PincodeHeaderComponent', () => {
  let component: PincodeHeaderComponent;
  let fixture: ComponentFixture<PincodeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

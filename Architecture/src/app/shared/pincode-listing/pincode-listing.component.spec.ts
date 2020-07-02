import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeListingComponent } from './pincode-listing.component';

describe('PincodeListingComponent', () => {
  let component: PincodeListingComponent;
  let fixture: ComponentFixture<PincodeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

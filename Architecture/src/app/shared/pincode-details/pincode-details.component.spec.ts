import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeDetailsComponent } from './pincode-details.component';

describe('PincodeDetailComponent', () => {
  let component: PincodeDetailsComponent;
  let fixture: ComponentFixture<PincodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

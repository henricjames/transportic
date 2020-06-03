import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeDetailComponent } from './pincode-detail.component';

describe('PincodeDetailComponent', () => {
  let component: PincodeDetailComponent;
  let fixture: ComponentFixture<PincodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

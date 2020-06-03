import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeListComponent } from './pincode-list.component';

describe('PincodeListComponent', () => {
  let component: PincodeListComponent;
  let fixture: ComponentFixture<PincodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

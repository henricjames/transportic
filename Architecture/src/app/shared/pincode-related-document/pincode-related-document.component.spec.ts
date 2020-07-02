import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeRelatedDocumentComponent } from './pincode-related-document.component';

describe('PincodeRelatedDocumentComponent', () => {
  let component: PincodeRelatedDocumentComponent;
  let fixture: ComponentFixture<PincodeRelatedDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeRelatedDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeRelatedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsentComponent } from './mailsent.component';

describe('MailsentComponent', () => {
  let component: MailsentComponent;
  let fixture: ComponentFixture<MailsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticedetailsComponent } from './noticedetails.component';

describe('NoticedetailsComponent', () => {
  let component: NoticedetailsComponent;
  let fixture: ComponentFixture<NoticedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

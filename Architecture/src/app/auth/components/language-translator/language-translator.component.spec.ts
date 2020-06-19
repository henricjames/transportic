import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTranslatorComponent } from './language-translator.component';

describe('LanguageTranslatorComponent', () => {
  let component: LanguageTranslatorComponent;
  let fixture: ComponentFixture<LanguageTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

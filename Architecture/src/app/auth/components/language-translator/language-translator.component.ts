import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-translator',
  templateUrl: './language-translator.component.html',
  styleUrls: ['./language-translator.component.scss']
})
export class LanguageTranslatorComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  language(lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}

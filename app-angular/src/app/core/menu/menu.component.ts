import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public open = false;
  public lang = 'en';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  switchLang() {
    this.lang = this.lang === 'en' ? 'fr' : 'en';
    this.translateService.use(this.lang);
  }

}

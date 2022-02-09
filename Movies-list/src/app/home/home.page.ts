import { Component } from '@angular/core';
import {Browser} from '@Capacitor/Browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async openUrl(pUrl: string) {
    await Browser.open({ url: pUrl });
  }
}

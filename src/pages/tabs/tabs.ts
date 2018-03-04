import { Component } from '@angular/core';

import { LedgerPage } from '../ledger/ledger';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LedgerPage;

  constructor() {

  }
}

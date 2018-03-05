//
// Date: 3/3/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import { Component } from '@angular/core';
import { LedgerPage } from '../ledger/ledger';
import { AccountsPage } from '../accounts/accounts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountsPage;
  tab2Root = LedgerPage;

  constructor() {}
}

/* End File */

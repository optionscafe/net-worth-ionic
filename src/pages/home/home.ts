//
// Date: 3/3/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import { Account } from '../../models/account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountsProvider} from '../../providers/accounts/accounts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  accounts: Account[]

  //
  // Construct
  //
  constructor(public navCtrl: NavController, public accountsProvider: AccountsProvider) {
    // Load data
    this.getAccounts();
  }

  //
  // Get Accounts
  //
  getAccounts()
  {
    // Get balance data
    this.accountsProvider.get().subscribe((data) => {    
      this.accounts = data;
    });
  } 

  //
  // Pull refresh 
  //
  doRefresh(refresher) {
    this.getAccounts();

    setTimeout(() => {
      refresher.complete();    
    }, 500);
  }  

}

/* End File */
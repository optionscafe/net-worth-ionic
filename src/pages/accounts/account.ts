//
// Date: 3/3/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import { Account } from '../../models/account';
import { AccountMark } from '../../models/account-mark';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountsProvider} from '../../providers/accounts/accounts';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {

  account: Account
  accountMarks: AccountMark[]

  //
  // Construct
  //
  constructor(public navCtrl: NavController, public accountsProvider: AccountsProvider, private navParams: NavParams) {
    this.account = this.navParams.data;
    this.getAccountMarks();
  }

  //
  // Get account marks.
  //
  getAccountMarks() {
    this.accountsProvider.getMarksByAccountId(this.account.Id).subscribe((data) => {    
      this.accountMarks = data;

      console.log(this.accountMarks);
    });    
  }

  //
  // Pull refresh 
  //
  doRefresh(refresher) {
    this.getAccountMarks();

    setTimeout(() => {
      refresher.complete();    
    }, 500);
  }    
}

/* End File */
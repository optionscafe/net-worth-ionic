//
// Date: 3/2/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { AccountMark } from '../../models/account-mark';
import { Environment } from '../../environments/environment';

@Injectable()
export class AccountsProvider {

  //
  // Construct.
  //
  constructor(public http: HttpClient) {}

  //
  // Get Accounts
  //
  get() : Observable<Account[]> {
    return this.http.get<Account[]>(Environment.appServer + '/api/v1/accounts').map(
      (data) => { return Account.buildForEmit(data); 
    });
  }

  //
  // Get Account Marks by Account Id
  //
  getMarksByAccountId(id: number) : Observable<AccountMark[]> {
    return this.http.get<AccountMark[]>(Environment.appServer + '/api/v1/accounts/' + id + '/marks').map(
      (data) => { return AccountMark.buildForEmit(data);
    });
  }  

}

/* End File */
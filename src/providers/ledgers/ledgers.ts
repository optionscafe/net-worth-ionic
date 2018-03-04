//
// Date: 3/2/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger } from '../../models/ledger';
import { Environment } from '../../environments/environment';

@Injectable()
export class LedgersProvider {

  //
  // Construct.
  //
  constructor(public http: HttpClient) {}

  //
  // Get Ledgers
  //
  get() : Observable<Ledger[]> {
    return this.http.get<Ledger[]>(Environment.appServer + '/api/v1/ledgers').map(
      (data) => { return Ledger.buildForEmit(data); 
    });
  }

}

/* End File */
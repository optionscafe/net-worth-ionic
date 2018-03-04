//
// Date: 3/3/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import { Ledger } from '../../models/ledger';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LedgersProvider} from '../../providers/ledgers/ledgers';

interface Map<T> {
  [K: string]: T;
}

@Component({
  selector: 'page-ledger',
  templateUrl: 'ledger.html'
})


export class LedgerPage 
{
  ledgers: Ledger[]
  colorsMap: Map<string> = {};

  //
  // Construct
  //
  constructor(public navCtrl: NavController, public ledgersProvider: LedgersProvider) {
    this.getLedgers();
  }

  //
  // Get Ledgers
  //
  getLedgers()
  {
    // Get ledger data
    this.ledgersProvider.get().subscribe((data) => {    
      this.ledgers = data;
      this.doColorMap();
    });
  } 

  //
  // Map categories to colors
  //
  doColorMap() 
  {
    let choices = [ "primary", "secondary", "danger", "light", "dark" ];

    for(let i = 0; i < this.ledgers.length; i++)
    {
      this.colorsMap[this.ledgers[i].CategoryName] = "primary";
    }

    let c = 0;
    let max = choices.length - 1;
    for(let row in this.colorsMap)
    {
      this.colorsMap[row] = choices[c];

      c++;

      if(c > max)
      {
        c = 0;
      }
    }
  }

  //
  // Return a color for a category
  //
  getCatColor(row: Ledger) : string 
  {
    if((! this.colorsMap) || (typeof this.colorsMap[row.CategoryName] == "undefined"))
    {
      return "";
    }

    return this.colorsMap[row.CategoryName];
  }
}

/* End File */

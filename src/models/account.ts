//
// Date: 3/2/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

export class Account {
  
  //
  // Construct.
  //
  constructor(
    public Id: number,
    public Name: string,
    public AccountNumber: string,
    public Balance: number,
    public Units: number,
    public CreatedAt: Date, 
    public UpdatedAt: Date        
  ){}

  //
  // Build object for emitting to the app.
  //
  public static buildForEmit(data) : Account[]  
  {
    let result = [];
    let date: Date;

    if(! data)
    {
      return result;      
    }

    for(let i = 0; i < data.length; i++)
    {
      if(data[i].created_at != "0001-01-01T00:00:00Z")
      {
        date = new Date(data[i].time);
      } else 
      {
        date = new Date(data[i].date + " 00:00:00");
      }

      result.push(new Account(
        data[i].id,
        data[i].name,
        data[i].account_number,
        data[i].balance,
        data[i].units,
        new Date(data[i].created_at),
        new Date(data[i].updated_at)
      ));
    }

    // Return happy
    return result;
  }
}

/* End File */
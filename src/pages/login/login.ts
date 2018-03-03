//
// Date: 3/2/2018
// Author(s): Spicer Matthews (spicer@options.cafe)
// Copyright: 2018 Cloudmanic Labs, LLC. All rights reserved.
//

import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { HomePage } from '../home/home';
import { NavController, ActionSheetController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Environment } from '../../environments/environment';

interface LoginResponse {
  access_token: string
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage 
{
  submitBtn: string = "Login";
  
  //
  // Construct.
  //
  constructor(public navCtrl: NavController, private http: HttpClient, public actionSheetCtrl: ActionSheetController) {}

  //
  // Do login to get an access token.
  //
  onSubmit(form: NgForm): void 
  {    
    // Update submit button
    this.submitBtn = "Logging In...";

    // Add oauth stuff
    form.value.grant_type = "password"
    form.value.client_id = Environment.clientId

    // Make the the HTTP request:
    this.http.post<LoginResponse>(Environment.appServer + '/oauth/token', form.value).subscribe(
      
      // Success
      data => {
        
        // // Store access token in local storage. 
        localStorage.setItem('access_token', data.access_token); 
        
        // Redirect to the home page
        this.navCtrl.setRoot(HomePage);
      },
      
      // Error
      (err: HttpErrorResponse) => {

        // Change button back.
        this.submitBtn = "Login";

        if (err.error instanceof Error) 
        {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else 
        { 
          // Show error message
          let alert = this.actionSheetCtrl.create({
            title: 'Unable To Login',
            subTitle: err.error.error,
            buttons: ['OK']
          });

          alert.present();          
        }
    
      }
        
    );     

  }

}

/* End File */
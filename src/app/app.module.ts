import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../providers/http/token.interceptor';

import { MyApp } from './app.component';
import { AccountPage } from '../pages/accounts/account';
import { AccountsPage } from '../pages/accounts/accounts';
import { LedgerPage } from '../pages/ledger/ledger';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountsProvider } from '../providers/accounts/accounts';
import { LedgersProvider } from '../providers/ledgers/ledgers';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AccountsPage,
    LedgerPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AccountsPage,
    LedgerPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AccountsProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    LedgersProvider 
  ]
})
export class AppModule {}

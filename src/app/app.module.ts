import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StatementsComponent } from './statements/statements.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'statements',
    component: StatementsComponent
  },
];

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      AccountsComponent,
      StatementsComponent
   ],
   imports: [
      BrowserModule, RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

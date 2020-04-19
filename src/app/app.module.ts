import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   { path: '', component: DashboardComponent },
   {
     path: 'accounts',
     loadChildren: () =>
       import('./accounts/accounts.module').then((m) => m.AccountsModule),
   },
   {
     path: 'statements',
     loadChildren: () =>
       import('./statements/statements.module').then((m) => m.StatementsModule),
   },
 ];

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent
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

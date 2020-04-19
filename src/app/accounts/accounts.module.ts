import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: '', component: AccountsComponent }
];

const routerModule: ModuleWithProviders = RouterModule.forChild(route);

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [AccountsComponent]
})
export class AccountsModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatementsComponent } from './statements.component';

const route: Routes = [
  { path: '', component: StatementsComponent }
];

const routerModule: ModuleWithProviders = RouterModule.forChild(route);

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
 declarations: [StatementsComponent]
})
export class StatementsModule { }

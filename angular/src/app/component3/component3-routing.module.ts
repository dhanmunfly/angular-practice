import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component3ListComponent } from './component3-list/component3-list.component';

const routes: Routes = [
  {
    path: '',
    component: Component3ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Component3RoutingModule { }

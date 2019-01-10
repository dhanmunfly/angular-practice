import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component3RoutingModule } from './component3-routing.module';
import { Component3ListComponent } from './component3-list/component3-list.component';

@NgModule({
  declarations: [Component3ListComponent],
  imports: [
    CommonModule,
    Component3RoutingModule
  ],
  exports : [
    CommonModule,
    Component3ListComponent
  ],
  providers: [],
  bootstrap: [Component3ListComponent]
})
export class Component3Module { }

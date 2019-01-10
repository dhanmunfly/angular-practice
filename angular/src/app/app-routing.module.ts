import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3ListComponent } from './component3/component3-list/component3-list.component';
import { FormComponent } from './form/form.component';
import { LoopingComponent } from './looping/looping.component';
import { Component5Component } from './component5/component5.component';


const routes: Routes = [
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
  { path: 'form', component: FormComponent },
  { path: 'loop', component: LoopingComponent},
  {path: 'lazy',
    loadChildren: './component3/component3.module#Component3Module'},
    { path: 'component5', component: Component5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

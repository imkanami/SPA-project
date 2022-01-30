import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Strona1Component } from './strona1/strona1.component';
import { Strona2Component } from './strona2/strona2.component';

const routes: Routes = [
  { path: 'strona1', component: Strona1Component},
  { path: 'strona2', component: Strona2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Strona1Component, Strona2Component]
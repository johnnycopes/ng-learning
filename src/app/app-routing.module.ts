import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DEMOS } from "./demos/demos";

const routes = DEMOS.map(demo => ({ path: demo.path, component: demo.component })) as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyadsPage } from './myads.page';

const routes: Routes = [
  {
    path: '',
    component: MyadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyadsPageRoutingModule {}

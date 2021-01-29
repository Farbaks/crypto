import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAdPage } from './new-ad.page';

const routes: Routes = [
  {
    path: '',
    component: NewAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAdPageRoutingModule {}

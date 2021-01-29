import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPaymentMethodPage } from './new-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: NewPaymentMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPaymentMethodPageRoutingModule {}

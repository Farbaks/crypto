import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPaymentMethodsPage } from './all-payment-methods.page';

const routes: Routes = [
  {
    path: '',
    component: AllPaymentMethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPaymentMethodsPageRoutingModule {}

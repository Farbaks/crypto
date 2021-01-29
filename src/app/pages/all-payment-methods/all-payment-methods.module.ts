import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPaymentMethodsPageRoutingModule } from './all-payment-methods-routing.module';

import { AllPaymentMethodsPage } from './all-payment-methods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPaymentMethodsPageRoutingModule
  ],
  declarations: [AllPaymentMethodsPage]
})
export class AllPaymentMethodsPageModule {}

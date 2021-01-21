import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';

import { MinichartComponent } from '../../components/minichart/minichart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule
  ],
  declarations: [WalletPage, MinichartComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class WalletPageModule {}

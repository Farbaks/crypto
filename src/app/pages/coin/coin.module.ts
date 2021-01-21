import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinPageRoutingModule } from './coin-routing.module';

import { CoinPage } from './coin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinPageRoutingModule
  ],
  declarations: [CoinPage]
})
export class CoinPageModule {}

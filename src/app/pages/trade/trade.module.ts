import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradePageRoutingModule } from './trade-routing.module';

import { TradePage } from './trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradePageRoutingModule
  ],
  declarations: [TradePage]
})
export class TradePageModule {}

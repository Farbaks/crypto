import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeDetailPageRoutingModule } from './trade-detail-routing.module';

import { TradeDetailPage } from './trade-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeDetailPageRoutingModule
  ],
  declarations: [TradeDetailPage]
})
export class TradeDetailPageModule {}

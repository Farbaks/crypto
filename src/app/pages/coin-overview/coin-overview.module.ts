import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinOverviewPageRoutingModule } from './coin-overview-routing.module';

import { CoinOverviewPage } from './coin-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinOverviewPageRoutingModule
  ],
  declarations: [CoinOverviewPage]
})
export class CoinOverviewPageModule {}

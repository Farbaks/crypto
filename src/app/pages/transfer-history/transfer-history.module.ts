import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferHistoryPageRoutingModule } from './transfer-history-routing.module';

import { TransferHistoryPage } from './transfer-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferHistoryPageRoutingModule
  ],
  declarations: [TransferHistoryPage]
})
export class TransferHistoryPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferHistoryPage } from './transfer-history.page';

const routes: Routes = [
  {
    path: '',
    component: TransferHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferHistoryPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeDetailPage } from './trade-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TradeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeDetailPageRoutingModule {}

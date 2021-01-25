import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinOverviewPage } from './coin-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CoinOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinOverviewPageRoutingModule {}

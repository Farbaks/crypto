import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinPage } from './coin.page';

const routes: Routes = [
  {
    path: '',
    component: CoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinPageRoutingModule {}

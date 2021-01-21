import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
          },
          {
            path: 'transfer',
            children: [
              {
                path: '',
                loadChildren: () => import('src/app/pages/transfer/transfer.module').then(m => m.TransferPageModule),
              },
              {
                path: 'history',
                loadChildren: () => import('src/app/pages/transfer-history/transfer-history.module').then( m => m.TransferHistoryPageModule)
              },
            ]
          },
          {
            path: 'withdraw',
            loadChildren: () => import('src/app/pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
          },
          {
            path: 'deposit',
            loadChildren: () => import('src/app/pages/deposit/deposit.module').then( m => m.DepositPageModule)
          },
        ]
      },
      {
        path: 'trade',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/trade/trade.module').then(m => m.TradePageModule),
          },
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/wallet/wallet.module').then(m => m.WalletPageModule),
          },
          {
            path: 'coin',
            loadChildren: () => import('src/app/pages/coin/coin.module').then( m => m.CoinPageModule)
          },
          {
            path: 'transfer',
            children: [
              {
                path: '',
                loadChildren: () => import('src/app/pages/transfer/transfer.module').then(m => m.TransferPageModule),
              },
              {
                path: 'history',
                loadChildren: () => import('src/app/pages/transfer-history/transfer-history.module').then( m => m.TransferHistoryPageModule)
              },
            ]
          },
          {
            path: 'withdraw',
            loadChildren: () => import('src/app/pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
          },
          {
            path: 'deposit',
            loadChildren: () => import('src/app/pages/deposit/deposit.module').then( m => m.DepositPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'dashboard'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'coin',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/coin/coin.module').then( m => m.CoinPageModule),
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
    ]
  },
  {
    path: 'trade',
    loadChildren: () => import('./pages/trade/trade.module').then( m => m.TradePageModule)
  },
  {
    path: 'trade/:type/:id',
    loadChildren: () => import('./pages/trade-detail/trade-detail.module').then( m => m.TradeDetailPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'transfer-history',
    loadChildren: () => import('./pages/transfer-history/transfer-history.module').then( m => m.TransferHistoryPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./pages/deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'coin-overview',
    loadChildren: () => import('./pages/coin-overview/coin-overview.module').then( m => m.CoinOverviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

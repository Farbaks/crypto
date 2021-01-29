import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAdPageRoutingModule } from './new-ad-routing.module';

import { NewAdPage } from './new-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAdPageRoutingModule
  ],
  declarations: [NewAdPage]
})
export class NewAdPageModule {}

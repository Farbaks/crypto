import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyadsPageRoutingModule } from './myads-routing.module';

import { MyadsPage } from './myads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyadsPageRoutingModule
  ],
  declarations: [MyadsPage]
})
export class MyadsPageModule {}

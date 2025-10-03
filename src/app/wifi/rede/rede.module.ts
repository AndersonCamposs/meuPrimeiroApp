import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedePageRoutingModule } from './rede-routing.module';

import { RedePage } from './rede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedePageRoutingModule
  ],
  declarations: [RedePage]
})
export class RedePageModule {}

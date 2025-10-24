import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivasPageRoutingModule } from './diretivas-routing.module';

import { DiretivasPage } from './diretivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivasPageRoutingModule
  ],
  declarations: [DiretivasPage]
})
export class DiretivasPageModule {}

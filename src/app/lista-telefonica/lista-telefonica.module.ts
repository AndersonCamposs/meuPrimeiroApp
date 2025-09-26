import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTelefonicaPageRoutingModule } from './lista-telefonica-routing.module';

import { ListaTelefonicaPage } from './lista-telefonica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTelefonicaPageRoutingModule
  ],
  declarations: [ListaTelefonicaPage]
})
export class ListaTelefonicaPageModule {}

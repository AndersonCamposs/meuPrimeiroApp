import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aula2509PageRoutingModule } from './aula-25-09-routing.module';

import { Aula2509Page } from './aula-25-09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aula2509PageRoutingModule
  ],
  declarations: [Aula2509Page]
})
export class Aula2509PageModule {}

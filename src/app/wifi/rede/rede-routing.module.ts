import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedePage } from './rede.page';

const routes: Routes = [
  {
    path: '',
    component: RedePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedePageRoutingModule {}

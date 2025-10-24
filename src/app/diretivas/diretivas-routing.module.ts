import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivasPage } from './diretivas.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivasPageRoutingModule {}

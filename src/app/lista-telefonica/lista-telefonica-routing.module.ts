import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTelefonicaPage } from './lista-telefonica.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTelefonicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTelefonicaPageRoutingModule {}

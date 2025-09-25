import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aula2509Page } from './aula-25-09.page';

const routes: Routes = [
  {
    path: '',
    component: Aula2509Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aula2509PageRoutingModule {}

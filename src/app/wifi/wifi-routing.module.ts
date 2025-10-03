import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiPage } from './wifi.page';

const routes: Routes = [
  {
    path: '',
    component: WifiPage
  },  {
    path: 'rede',
    loadChildren: () => import('./rede/rede.module').then( m => m.RedePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiPageRoutingModule {}

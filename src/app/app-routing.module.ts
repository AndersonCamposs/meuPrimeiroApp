import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aula-25-09',
    loadChildren: () => import('./aula-25-09/aula-25-09.module').then( m => m.Aula2509PageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'lista-telefonica',
    loadChildren: () => import('./lista-telefonica/lista-telefonica.module').then( m => m.ListaTelefonicaPageModule)
  },
  {
    path: 'albuns',
    loadChildren: () => import('./albuns/albuns.module').then( m => m.AlbunsPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },  {
    path: 'avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'diretivas',
    loadChildren: () => import('./diretivas/diretivas.module').then( m => m.DiretivasPageModule)
  },
  {
    path: 'persistencia',
    loadChildren: () => import('./persistencia/persistencia.module').then( m => m.PersistenciaPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

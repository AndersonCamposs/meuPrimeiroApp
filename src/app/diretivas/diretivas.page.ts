import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.page.html',
  styleUrls: ['./diretivas.page.scss'],
  standalone: false
})
export class DiretivasPage implements OnInit {

  isRock: boolean = false;
  isForro: boolean = false;
  isSamba: boolean = false;

  exibirRock() {
    this.limparTela();
    this.isRock = true;
  }

  exibirForro() {
    this.limparTela();
    this.isForro = true;
  }

  exibirSamba() {
    this.limparTela();
    this.isSamba = true;
  }

  limparTela() {
    this.isRock = false;
    this.isForro = false;
    this.isSamba = false;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public valorEntrada: number = 0;

  public valorSaida: number = 0;

  public totalCaixa: number = 0;

  constructor() {

  }

  public adicionar(): void {
    this.valorEntrada++;
    this.obterTotalCaixa();
  }

  public retirar(): void {
    this.valorSaida++;
    this.obterTotalCaixa();
  }

  public obterTotalCaixa(): void {
    this.totalCaixa = this.valorEntrada - this.valorSaida;
  }

  public verificarCor(): string {
    if(this.totalCaixa < 0) {
      return "danger";
    } else {
      return "primary";
    }
  }

}

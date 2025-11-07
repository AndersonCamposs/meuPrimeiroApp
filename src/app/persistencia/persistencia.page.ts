import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-persistencia',
  templateUrl: './persistencia.page.html',
  styleUrls: ['./persistencia.page.scss'],
  standalone: false
})
export class PersistenciaPage implements OnInit {

  textoAnotacao: string = "";
  anotacoes: Array<Anotacao> = [];

  readonly storageKey = "anotacoes";

  constructor(public storage: Storage) {
      this.inicializar();
      this.carregar();
  }

  ngOnInit() {
  }

  private async inicializar() {
    this.storage = await  this.storage.create();
  }

  private salvar(lista: Array<any>) {
    this.storage.set(this.storageKey, lista);
  }

  private carregar() {
    this.storage.get(this.storageKey).then( (value) => {
      if(value != null) {
        this.anotacoes = value;
      }
    })
  }

  salvarAnotacao(): void {
    const anotacao = new Anotacao();
    anotacao.texto = this.textoAnotacao;

    this.anotacoes.push(anotacao);

    this.textoAnotacao = "";

    this.salvar(this.anotacoes);
  }

  apagar(i: number) {
    this.anotacoes = this.anotacoes.filter((value, index) => {
      return index != i;
    })

    this.salvar(this.anotacoes);
  }

  apagarTudo(): void {
    this.anotacoes = [];
    this.salvar(this.anotacoes);
  }

}

export class Anotacao {
  texto!: string;
}

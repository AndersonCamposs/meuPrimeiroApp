import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
  standalone: false
})
export class AvaliacaoPage implements OnInit {

  nota1?: number;
  nota2?: number;
  nota3?: number;
  nota4?: number;
  media: number = 0;
  situacao: string = "N/A";
  corSituacao: string = "";

  constructor( public alertControler: AlertController) { }

  ngOnInit() {
  }

  calcularNota(): void {
    if (!this.nota1 || !this.nota2 || !this.nota3 || !this.nota4) {
      this.showMessage();
    } else {
      this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
      if (this.media >= 7) {
        this.situacao = "Aprovado";
        this.corSituacao = "success";
      } else {
        this.situacao = "Reprovado";
        this.corSituacao = "danger";
      }
    }
  }

  showMessage(): void {
    this.alertControler.create({
      header: "Atenção!",
      message: "Informe o valor de todas as notas",
      buttons: ['Fechar']
    }).then(res =>{
      res.present();
    })
  }

}

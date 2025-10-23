import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  status: string = "Não logado";
  senha: string = "123"; // senha fixa

  senhaUsuario?: string;

  tentativas: number = 3;

  botaoInativo: boolean = false;

  constructor( public toastController: ToastController ) { }

  ngOnInit() {
  }

  async login() {
    if (this.tentativas < 1) {
      this.botaoInativo = true;
      return;
    }

    if (this.senhaUsuario != this.senha) {
      this.tentativas--;
      this.senhaUsuario = "";
      await this.exibirAlertErro();
    } else {
      this.status = "Logado";
    }
  }

  async exibirAlertErro() {
    const toast = await this.toastController.create({
      message: `Senha incorreta, restam ${this.tentativas} tentativas.`,
      duration: 2000
    });

    await toast.present();
  }

}

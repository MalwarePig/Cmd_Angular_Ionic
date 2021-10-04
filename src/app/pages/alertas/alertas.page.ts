import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
  titulo: string;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Escribe a continiación tu <strong>Nómbre</strong>!!!',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Introduce nómbre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (data) => {
            console.log('Confirm Okay', data);
            this.titulo = data.Nombre;
          }
        }
      ]
    });

    await alert.present();
  }

}

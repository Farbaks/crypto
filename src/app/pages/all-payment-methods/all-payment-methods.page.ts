import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewPaymentMethodPage } from '../new-payment-method/new-payment-method.page';

@Component({
  selector: 'app-all-payment-methods',
  templateUrl: './all-payment-methods.page.html',
  styleUrls: ['./all-payment-methods.page.scss'],
})
export class AllPaymentMethodsPage implements OnInit {
  dividers: any;
  paymentMethods: any;
  that = this;
  @Input() type: string;
  constructor(public modalController: ModalController) {
    this.dividers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]
    this.paymentMethods = [
      {
        id: 1,
        image: '../../../assets/icons/safebox.png',
        name: 'Angola'
      },
      {
        id: 2,
        image: '../../../assets/icons/safebox.png',
        name: 'Argentina'
      },
      {
        id: 3,
        image: '../../../assets/icons/safebox.png',
        name: 'Armenia'
      },
      {
        id: 4,
        image: '../../../assets/icons/safebox.png',
        name: 'Bangladesh'
      },
      {
        id: 5,
        image: '../../../assets/icons/safebox.png',
        name: 'Belarus'
      },
      {
        id: 6,
        image: '../../../assets/icons/safebox.png',
        name: 'Belgium'
      },
      {
        id: 7,
        image: '../../../assets/icons/safebox.png',
        name: 'Brazil'
      },
      {
        id: 8,
        image: '../../../assets/icons/safebox.png',
        name: 'Brunei'
      },
      {
        id: 9,
        image: '../../../assets/icons/safebox.png',
        name: 'Canada'
      },
      {
        id: 10,
        image: '../../../assets/icons/safebox.png',
        name: 'Chad'
      },
      {
        id: 11,
        image: '../../../assets/icons/safebox.png',
        name: 'Colombia'
      },
      {
        id: 12,
        image: '../../../assets/icons/safebox.png',
        name: 'Cyprus'
      },
      {
        id: 13,
        image: '../../../assets/icons/safebox.png',
        name: 'Djibouti'
      },
      {
        id: 14,
        image: '../../../assets/icons/safebox.png',
        name: 'Dominica'
      },
      {
        id: 15,
        image: '../../../assets/icons/safebox.png',
        name: 'Egypt'
      },
      {
        id: 16,
        image: '../../../assets/icons/safebox.png',
        name: 'El Salvador'
      },
    ];
  }

  ngOnInit() {
  }

  goToDiv(n) {
    document.getElementById('' + n).style.position = "relative";
    setTimeout(() => {
      document.getElementById('' + n).scrollIntoView(true);
      document.getElementById('' + n).style.position = "sticky";
      document.getElementById('' + n).style.top = "0";
    }, 10);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async newMethodForm() {
    let that = this.that;
    if (this.type == 'buy') {
      this.modalController.dismiss({
        message: 'the selected bank will be passed back'
      });
    }
    else {
      const modal = await this.modalController.create({
        component: NewPaymentMethodPage,
        componentProps: {
          type: "bank type"
        },
      });
      modal.onDidDismiss().then(response => {
        if (response.data != undefined && response.data.message == "Bank info gotten successfully") {
          console.log(response.data.message);
          setTimeout(() => {
            that.dismiss();
          }, 50);
          
        }
      })
      return await modal.present();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-payment-method',
  templateUrl: './new-payment-method.page.html',
  styleUrls: ['./new-payment-method.page.scss'],
})
export class NewPaymentMethodPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  dismissWithInfo() {
    this.modalController.dismiss({
      message: 'Bank info gotten successfully'
    });
  }

}

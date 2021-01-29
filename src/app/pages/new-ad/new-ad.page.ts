import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController, PopoverController } from '@ionic/angular';
import { InfoComponent } from '../../components/info/info.component';
import { WarningComponent } from '../../components/warning/warning.component';
import { AllPaymentMethodsPage} from '../all-payment-methods/all-payment-methods.page';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.page.html',
  styleUrls: ['./new-ad.page.scss'],
})
export class NewAdPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  currentStep: number = 0;
  segmentValue1: string;
  segmentValue2: string;
  sampleData: any[];
  coinValue: any;
  floatValue: any = 1;
  constructor(public popoverController: PopoverController, private navCtrl: NavController, public modalController: ModalController) {
    this.segmentValue1 = "buy";
    this.segmentValue2 = "floating";
    this.coinValue = "15.00";
    this.sampleData = [
      {
        img: "../../../assets/icons/png_512/bitcoin-176-441959.png",
        name: "BTC",
        balance: 0.00345
      },
      {
        img: "../../../assets/icons/png_512/devcoin-441952.png",
        name: "DEV",
        balance: 79.22
      },
      {
        img: "../../../assets/icons/png_512/etherium-1-441953.png",
        name: "ETH",
        balance: 2.350
      },
      {
        img: "../../../assets/icons/png_512/litecoin-22-441956.png",
        name: "LTC",
        balance: 0.223
      },
    ]
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
    autoHeight: true,
  };

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
    this.slides.getActiveIndex().then((n) => {
      this.currentStep = n;
      console.log(n);
    });

  }
  prev() {
    this.slides.slidePrev();
    this.slides.getActiveIndex().then((n) => {
      this.currentStep = n;
      console.log(n);
    });
  }

  stepChanged() {
    // console.log(this.slides.getActiveIndex());
  }

  increaseFloatValue() {
    if (this.floatValue < 100) {
      this.floatValue += 1;
    }
  }

  reduceFloatValue() {
    if (this.floatValue > 0) {
      this.floatValue -= 1;
    }
  }

  async displayInfo() {
    const popover = await this.popoverController.create({
      component: InfoComponent,
      cssClass: 'info-popup',
      mode:'ios',
      componentProps: {
        message: "This is more info about the Floating Price Margin!"
      },
      translucent: true
    });
    return await popover.present();
  }

  async showWarning() {
    const popover = await this.popoverController.create({
      component: WarningComponent,
      cssClass: 'warning-popup',
      mode:'ios',
      componentProps: {
        heading: "Do you want to quit?",
        message: "If you quit now, all unsaved changes will be discarded",
        actionType:"Quit"
      },
      translucent: true
    });
    popover.onDidDismiss().then(response => {
      if (response.data != undefined && response.data.message == "cancel") {
        popover.dismiss();
      }
      else if (response.data != undefined && response.data.message == "Quit") {
        popover.dismiss();
        this.navCtrl.back();
      }
    })
    return await popover.present();
  }

  async selectPayment() {
    const modal = await this.modalController.create({
      component: AllPaymentMethodsPage,
      // cssClass: 'my-custom-class',
      componentProps: {
        type: this.segmentValue1
      },
    });
    return await modal.present();
  }

}

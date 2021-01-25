import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  sampleData: any;
  selectedCoin: any;
  amount: number;
  selectedCoinName: string;
  segmentValue:string;
  constructor() {
    this.segmentValue = "card";
    this.amount = 0.000;
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
    this.selectedCoin = this.sampleData[1];
    this.selectedCoinName = this.selectedCoin.name;
    // this.slides.lockSwipes;
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
    autoHeight:true
  };

  ngOnInit() {
  }

  changeCoin() {
    this.selectedCoin = this.sampleData.filter((n) => n.name == this.selectedCoinName)[0];
    this.amount = 0.00;
  }

  next() {
    this.slides.slideNext();
  }
  prev() {
    this.slides.slidePrev();
  }

}

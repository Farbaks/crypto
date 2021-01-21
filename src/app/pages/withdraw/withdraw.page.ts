import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  sampleData: any;
  selectedCoin: any;
  coinValue: number;
  selectedCoinName: string;
  constructor() {
    this.coinValue = 0.000;
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
    this.selectedCoin = this.sampleData[2];
    this.selectedCoinName = this.selectedCoin.name;
  }

  ngOnInit() {
  }

  changeCoin() {
    this.selectedCoin = this.sampleData.filter((n) => n.name == this.selectedCoinName)[0];
    this.coinValue = 0.00;
  }

  copyValue() {
    this.coinValue = this.selectedCoin.balance;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  sampleData: any;
  selectedCoin:any;
  coinValue:number;
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

  switch() {
    if (document.getElementById("transfer-list").style.flexFlow != "column-reverse") {
      document.getElementById("transfer-list").style.flexFlow = "column-reverse";
      document.getElementById("transfer-item-last").style.marginBottom = "10px";
      document.getElementById("transfer-item-last").style.marginTop = "0";
    }
    else {
      document.getElementById("transfer-list").style.flexFlow = "column";
      document.getElementById("transfer-item-last").style.marginBottom = "0";
      document.getElementById("transfer-item-last").style.marginTop = "10px";
    }

  }

  changeCoin() {
    this.selectedCoin = this.sampleData.filter((n) => n.name == this.selectedCoinName)[0];
    this.coinValue = 0.00;
  }

  maxValue() {
    this.coinValue = this.selectedCoin.balance;
  }

}

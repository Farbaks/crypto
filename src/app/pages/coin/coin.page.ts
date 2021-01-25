import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.page.html',
  styleUrls: ['./coin.page.scss'],
})
export class CoinPage implements OnInit {

  segmentValue:string;
  constructor() {
    this.segmentValue = "p2p";
  }

  ngOnInit() {
  }

  openSearchBar() {
    document.getElementById('coin-searchicon').style.display = "none";
    document.getElementById('coin-title').style.display = "none";
    document.getElementById('coin-searchcon').style.display = "flex";
    document.getElementById('coin-searchbar').style.width = "auto";
  }
  closeSearchBar() {
    document.getElementById('coin-searchicon').style.display = "flex";
    document.getElementById('coin-title').style.display = "flex";
    document.getElementById('coin-searchcon').style.display = "none";
    document.getElementById('coin-searchbar').style.width = "0px";
  }

  segmentChanged() {
    if(this.segmentValue == 'p2p') {
    }
  }

}

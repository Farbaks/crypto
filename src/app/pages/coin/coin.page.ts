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
    document.getElementById('searchicon').style.display = "none";
    document.getElementById('searchcon').style.display = "flex";
    document.getElementById('searchbar').style.width = "auto";
  }
  closeSearchBar() {
    document.getElementById('searchicon').style.display = "flex";
    document.getElementById('searchcon').style.display = "none";
    document.getElementById('searchbar').style.width = "0px";
  }

  segmentChanged() {
    if(this.segmentValue == 'p2p') {
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
})
export class TradePage implements OnInit {

  segmentValue:string;
  constructor() {
    this.segmentValue = "buy";
  }

  ngOnInit() {
  }

  openSearchBar() {
    document.getElementById('trade-searchicon').style.display = "none";
    document.getElementById('trade-title').style.display = "none";
    document.getElementById('trade-searchcon').style.display = "flex";
    document.getElementById('trade-searchbar').style.width = "auto";
  }
  closeSearchBar() {
    document.getElementById('trade-searchicon').style.display = "flex";
    document.getElementById('trade-title').style.display = "block";
    document.getElementById('trade-searchcon').style.display = "none";
    document.getElementById('trade-searchbar').style.width = "0px";
  }

}

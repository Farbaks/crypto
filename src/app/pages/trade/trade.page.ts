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
    document.getElementById('searchicon').style.display = "none";
    document.getElementById('searchcon').style.display = "flex";
    document.getElementById('searchbar').style.width = "auto";
  }
  closeSearchBar() {
    document.getElementById('searchicon').style.display = "flex";
    document.getElementById('searchcon').style.display = "none";
    document.getElementById('searchbar').style.width = "0px";
  }

}

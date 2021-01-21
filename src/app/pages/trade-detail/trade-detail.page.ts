import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.page.html',
  styleUrls: ['./trade-detail.page.scss'],
})
export class TradeDetailPage implements OnInit {
  type:string;
  constructor(private route: ActivatedRoute,) {
    this.type = this.route.snapshot.paramMap.get("type");
    console.log(this.type);
  }

  ngOnInit() {
  }

}

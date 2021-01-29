import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent implements OnInit {
  @Input() heading: string;
  @Input() message: string;
  @Input() actionType: string;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  action(type) {
    if(type == 'cancel') {
      this.popoverController.dismiss({
        'message': 'cancel',
      });
    }
    else {
      this.popoverController.dismiss({
        'message': this.actionType,
      });
    }
    
  }
}

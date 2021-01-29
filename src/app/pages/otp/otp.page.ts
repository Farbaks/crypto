import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  @ViewChild('ngOtpInput') ngOtpInputRef:any;
  constructor(private router: Router,) {
  
  }

  config = {
    length: 4,
    allowNumbersOnly:true,
    inputClass: 'otp-input',
    containerClass: 'otp'
  };

  ngOnInit() {
    
  }

  onOtpChange(event) {
    console.log(event.length);
    if(event.length == 4) {
      this.router.navigate(['/tabs/']);
    }
  }

}

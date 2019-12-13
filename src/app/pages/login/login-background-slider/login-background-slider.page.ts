import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-background-slider',
  templateUrl: './login-background-slider.page.html',
  styleUrls: ['./login-background-slider.page.scss'],
})
export class LoginBackgroundSliderPage implements OnInit {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  slideOpts = {
    effect: "fade",
    autoplay: true,
    speed: 1500,
    loop: true,
  }

  constructor() { }

  ngOnInit() {
  }

}

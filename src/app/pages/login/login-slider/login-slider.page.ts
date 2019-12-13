import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-login-slider",
  templateUrl: "./login-slider.page.html",
  styleUrls: ["./login-slider.page.scss"]
})
export class LoginSliderPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Slider methods
  @ViewChild("slider", { static: false }) slider;
  @ViewChild("innerSlider", { static: false }) innerSlider;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  login() {}

  signup() {}

  resetPassword() {}
}

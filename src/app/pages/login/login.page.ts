import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  items = [
    {
      title: "Type one",
      page: "LoginOnePage"
    },
    {
      title: "Instagram style",
      page: "LoginInstagramPage"
    },
    {
      title: "Login with slider text",
      page: "LoginSliderPage"
    },
    {
      title: "Login with video background",
      page: "LoginBackgroundVideoPage"
    },
    {
      title: "Login with slider background",
      page: "LoginBackgroundSliderPage"
    }
  ];

  route = {
    LoginOnePage: "login-one",
    LoginInstagramPage: "login-instagram",
    LoginSliderPage: "login-slider",
    LoginBackgroundVideoPage: "login-background-video",
    LoginBackgroundSliderPage: "login-background-slider"
  }

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  itemTapped(item) {
    this.router.navigate([this.route[item.page]], {
      relativeTo: this.activatedRoute
    });
  }
}

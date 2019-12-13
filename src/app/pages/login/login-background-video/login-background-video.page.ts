import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-login-background-video",
  templateUrl: "./login-background-video.page.html",
  styleUrls: ["./login-background-video.page.scss"]
})
export class LoginBackgroundVideoPage implements OnDestroy, AfterViewInit {
  @ViewChild("player", { static: false }) player;

  constructor() {}

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.player.nativeElement.src = "assets/video/background-480.mp4";
    this.player.nativeElement.load();
  }

  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ngOnDestroy(): void {
    // the .nativeElement property of the ViewChild is the reference to the tag <video>
    this.player.nativeElement.src = "";
    this.player.nativeElement.load();
  }

  goToSignup() {
    console.log("Signup clicked");
  }

  goToLogin() {
    console.log("Login clicked");
  }
}

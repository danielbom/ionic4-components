import { AppState } from "src/services/app.state.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theming",
  templateUrl: "./theming.page.html",
  styleUrls: ["./theming.page.scss"]
})
export class ThemingPage implements OnInit {
  constructor(public global: AppState) {}

  ngOnInit() {}

  changeTheme(theme: string) {
    this.global.set("theme", theme);
  }
}

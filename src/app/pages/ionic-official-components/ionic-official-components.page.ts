import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ionic-official-components",
  templateUrl: "./ionic-official-components.page.html",
  styleUrls: ["./ionic-official-components.page.scss"]
})
export class IonicOfficialComponentsPage implements OnInit {
  items = [
    {
      title: "Buttons",
      page: "ButtonsListPage"
    },
    {
      title: "Alerts",
      page: "AlertsPage"
    },
    {
      title: "Cards",
      page: "CardsListPage"
    }
  ];

  routes = {
    ButtonsListPage: "buttons-list",
    AlertsPage: "alerts",
    CardsListPage: "cards-list"
  };

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  itemTapped(item) {
    this.route.navigate([this.routes[item.page]], {
      relativeTo: this.activatedRoute
    });
  }
}

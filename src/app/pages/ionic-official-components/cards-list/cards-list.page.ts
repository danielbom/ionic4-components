import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cards-list",
  templateUrl: "./cards-list.page.html",
  styleUrls: ["./cards-list.page.scss"]
})
export class CardsListPage implements OnInit {
  items = [
    {
      title: "Cards with Background",
      page: "CardBackgroundPage"
    },
    {
      title: "Cards with Image",
      page: "CardImagePage"
    },
    {
      title: "Social Cards",
      page: "CardSocialPage"
    },
    {
      title: "Cards with Map",
      page: "CardMapPage"
    },
    {
      title: "Cards with Badge",
      page: "CardBadgePage"
    }
  ];

  route = {
    CardBackgroundPage: "card-background",
    CardImagePage: "card-image",
    CardSocialPage: "card-social",
    CardMapPage: "card-map",
    CardBadgePage: "card-badge"
  };

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  itemTapped(item) {
    this.router.navigate([this.route[item.page]], {
      relativeTo: this.activatedRoute
    });
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-background",
  templateUrl: "./card-background.page.html",
  styleUrls: ["./card-background.page.scss"]
})
export class CardBackgroundPage implements OnInit {
  cards = [
    {
      image: "assets/img/card/card-saopaolo.png",
      title: "São Paulo",
      subtitle: "41 Listings"
    },
    {
      image: "assets/img/card/card-amsterdam.png",
      title: "Amsterdam",
      subtitle: "64 Listings"
    },
    {
      image: "assets/img/card/card-sf.png",
      title: "San Francisco",
      subtitle: "72 Listings"
    },
    {
      image: "assets/img/card/card-madison.png",
      title: "Madison",
      subtitle: "28 Listings"
    }
  ];

  constructor() {}

  ngOnInit() {}

  cardTapped(card) {
    alert(card.title + " was tapped.");
  }
}

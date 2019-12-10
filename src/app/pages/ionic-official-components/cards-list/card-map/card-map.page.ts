import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-map",
  templateUrl: "./card-map.page.html",
  styleUrls: ["./card-map.page.scss"]
})
export class CardMapPage implements OnInit {
  cards = [
    {
      image: "assets/img/card/advance-card-map-madison.png",
      name: "Madison Map",
      ETA: "18 min",
      distance: 2.6,
      places: [
        {
          name: "Museum of Football",
          address: "11 N. Way St, Madison, WI 53703",
          icon: "football"
        },
        {
          name: "Institute of Fine Cocktails",
          address: "14 S. Hop Avenue, Madison, WI 53703",
          icon: "wine"
        }
      ]
    },
    {
      image: "assets/img/card/advance-card-map-mario.png",
      name: "Super Mario Map",
      ETA: "3 hr",
      distance: 4.8,
      places: [
        {
          name: "Yoshis Island",
          address: "Iggy Koopa",
          icon: "cloud"
        },
        {
          name: "Forest of Illusion",
          address: "Roy Koopa",
          icon: "leaf"
        }
      ]
    },
    {
      image: "assets/img/card/advance-card-map-paris.png",
      name: "Paris Map",
      ETA: "26 min",
      distance: 8.1,
      places: [
        {
          name: "Museum of Information",
          address: "44 Rue de Info, 75010 Paris, France",
          icon: "information-circle"
        },
        {
          name: "General Pharmacy",
          address: "1 Avenue Faux, 75010 Paris, France",
          icon: "leaf"
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  placeTapped(place) {
    alert(place.name + " was tapped.");
  }

  getDirections(card) {
    alert("Getting directions to " + card.name);
  }

  seeInMap(card) {
    alert("Seeing " + card.name + " on maps.");
  }
}

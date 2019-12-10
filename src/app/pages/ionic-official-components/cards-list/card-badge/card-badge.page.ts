import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-badge",
  templateUrl: "./card-badge.page.html",
  styleUrls: ["./card-badge.page.scss"]
})
export class CardBadgePage implements OnInit {
  cards = [
    {
      image: "assets/img/card/bjork-live.jpg",
      title: "Björk",
      description:
        "Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes.",
      albums: 9,
      followers: "260k"
    },
    {
      image: "assets/img/card/badu-live.png",
      title: "Erykah Badu",
      description:
        "American singer-songwriter, record producer, activist, and actress, Badu's style is a prime example of neo-soul.",
      albums: 4,
      followers: "120k"
    },
    {
      image: "assets/img/card/queen-live.png",
      title: "Queen",
      description:
        "The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.",
      albums: 38,
      followers: "30mi"
    },
    {
      image: "assets/img/card/rundmc-live.png",
      title: "Run-D.M.C.",
      description:
        "The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.",
      albums: 8,
      followers: "80k"
    }
  ];
  constructor() {}

  ngOnInit() {}

  cardTapped(card) {
    alert(card.title + " was tapped.");
  }

  followersTapped(card) {
    alert(card.title + " followers tapped.");
  }

  albumsTapped(card) {
    alert(card.title + " albums tapped.");
  }
}

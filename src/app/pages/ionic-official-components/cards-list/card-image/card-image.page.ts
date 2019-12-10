import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-image",
  templateUrl: "./card-image.page.html",
  styleUrls: ["./card-image.page.scss"]
})
export class CardImagePage implements OnInit {
  cards = [
    {
      image: "assets/img/card/nin-live.png",
      title: "Nine Inch Nails Live",
      description:
        "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience."
    },
    {
      image: "assets/img/card/badu-live.png",
      title: "Erykah Badu",
      description:
        "American singer-songwriter, record producer, activist, and actress, Badu's style is a prime example of neo-soul."
    },
    {
      image: "assets/img/card/queen-live.png",
      title: "Queen",
      description:
        "The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world."
    },
    {
      image: "assets/img/card/bjork-live.jpg",
      title: "Björk",
      description: "Björk is an Icelandic singer, songwriter and actress."
    },
    {
      image: "assets/img/card/rundmc-live.png",
      title: "Run-D.M.C.",
      description:
        "The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop."
    }
  ];

  constructor() {}

  ngOnInit() {}

  cardTapped(card) {
    alert(card.title + " was tapped.");
  }

  share(card) {
    alert(card.title + " was shared.");
  }

  listen(card) {
    alert("Listening to " + card.title);
  }

  favorite(card) {
    alert(card.title + " was favorited.");
  }
}

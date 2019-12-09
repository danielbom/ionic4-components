import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"]
})
export class UsersPage implements OnInit {
  lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque laboriosam saepe eos quibusdam quos mollitia itaque odit necessitatibus dicta nam non delectus expedita magnam amet cupiditate, doloremque qui commodi?";

  users = [
    {
      name: "Cosima",
      description: this.lorem,
      avatar: "assets/img/avatar/cosima-avatar.jpg",
      rating: 1
    },
    {
      name: "Girl",
      description: this.lorem,
      avatar: "assets/img/avatar/girl-avatar.png",
      rating: 2
    },
    {
      name: "Ian",
      description: this.lorem,
      avatar: "assets/img/avatar/ian-avatar.png",
      rating: 3
    },
    {
      name: "Marty",
      description: this.lorem,
      avatar: "assets/img/avatar/marty-avatar.png",
      rating: 4
    },
    {
      name: "Sarah",
      description: this.lorem,
      avatar: "assets/img/avatar/sarah-avatar.jpg",
      rating: 5
    },
  ];

  constructor() {}

  ngOnInit() {}

  stars(n: number) {
    return Array.from({ length: n }).fill(0);
  }
}

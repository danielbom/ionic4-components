import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  items = [
    {
      title: "Settings",
      page: "SettingsListPage"
    },
    {
      title: "Sliding Item",
      page: "SlidingItemPage"
    },
    {
      title: "Delete Items",
      page: "DeleteItemsPage"
    },
    {
      title: "Reactive List Label",
      page: "ReactiveListLabelPage"
    },
    {
      title: "Users Listing",
      page: "UsersPage"
    },
    {
      title: "Crypto Currencies",
      page: "CryptoListPage"
    }
  ];

  routes = {
    SettingsListPage: "settings-list",
    SlidingItemPage: "sliding-item",
    DeleteItemsPage: "delete-items",
    ReactiveListLabelPage: "reactive-list-label",
    UsersPage: "users",
  }

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {}

  itemTapped(event, item) {
    console.log(item);
    this.router.navigate([this.routes[item.page]], { relativeTo: this.activatedRoute });
  }
}

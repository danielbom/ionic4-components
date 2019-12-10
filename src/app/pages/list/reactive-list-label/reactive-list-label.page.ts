import { Component, OnInit } from "@angular/core";

import { LIST_DATA } from "./list-data";

@Component({
  selector: "app-reactive-list-label",
  templateUrl: "./reactive-list-label.page.html",
  styleUrls: ["./reactive-list-label.page.scss"]
})
export class ReactiveListLabelPage implements OnInit {
  public data = LIST_DATA;
  public dataList = [];
  public currentCategory = "";
  public categories = [];

  constructor() {}

  ngOnInit() {
    this.categories = this.data
      .map(item => item.category)
      .filter((item, i, array) => array.indexOf(item) === i);

    this.setCategory(this.categories[0]);
  }

  setCategory(category) {
    this.currentCategory = category;
    this.dataList = this.data.filter(
      item => item.category === this.currentCategory
    );
  }
}

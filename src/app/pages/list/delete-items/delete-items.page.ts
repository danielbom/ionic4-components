import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-delete-items",
  templateUrl: "./delete-items.page.html",
  styleUrls: ["./delete-items.page.scss"]
})
export class DeleteItemsPage implements OnInit {
  items = Array.from({ length: 3 }).map((_, i) => ({ title: `Item ${i}` }));
  things = Array.from({ length: 3 }).map((_, i) => ({ title: `Thing ${i}` }));

  constructor() {}

  ngOnInit() {}

  addItem() {
    this.items.push({ title: `Item ${this.items.length + 1}` });
  }

  addThing() {
    this.things.push({ title: `Thing ${this.things.length + 1}` });
  }

  deleteItem(list: [], index) {
    list.splice(index, 1);
  }
}

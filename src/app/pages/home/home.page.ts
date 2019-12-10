import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  activePage = new Subject();
  pages = [
    {
      title: "Home",
      component: "HomePage",
      active: true,
      icon: "home",
    },
    {
      title: "Accordion List",
      component: "AccordionListPage",
      active: false,
      icon: "map"
    },
    {
      title: "Ionic Official Components",
      component: "IonicOfficialComponentsPage",
      active: false,
      icon: "ionic",
      color: "success"
    },
    {
      title: "Ionic Native Features",
      component: "IonicNativePage",
      active: false,
      icon: "ionic"
    },
    {
      title: "Login",
      component: "LoginListPage",
      active: false,
      icon: "archive"
    },
    {
      title: "Lists",
      component: "ListPage",
      active: false,
      icon: "body",
    },
    {
      title: "Miscellaneous",
      component: "MiscellaneousListPage",
      active: false,
      icon: "bookmarks"
    },
    {
      title: "Modal with Navigation",
      component: "ModalWithNavigationPage",
      active: false,
      icon: "book"
    },
    {
      title: "Popup Fab",
      component: "PopupFabPage",
      active: false,
      icon: "map"
    },
    {
      title: "Popup Modal",
      component: "PopupModalsPage",
      active: false,
      icon: "basket"
    },
    {
      title: "Popup Menu",
      component: "PopupMenuListPage",
      active: false,
      icon: "beer"
    },
    {
      title: "Profile",
      component: "ProfileListPage",
      active: false,
      icon: "camera"
    },
    {
      title: "Side Menu",
      component: "SideMenuPage",
      active: false,
      icon: "bookmark"
    },
    {
      title: "Timeline",
      component: "TimelinePage",
      active: false,
      icon: "calendar"
    },
    {
      title: "Slides",
      component: "SlidesPage",
      active: false,
      icon: "contact"
    },
    {
      title: "Theming",
      component: "ThemingPage",
      active: false,
      icon: "power",
    }
  ];

  routes = {
    HomePage: "#",
    AccordionListPage: "accordion-list",
    IonicOfficialComponentsPage: "ionic-official-components",
    IonicNativePage: "ionic-native",
    LoginListPage: "login",
    ListPage: "list",
    MiscellaneousListPage: "miscellaneous",
    ModalWithNavigationPage: "modal-with-navigation",
    PopupFabPage: "popup-fab",
    PopupModalsPage: "popup-modal",
    PopupMenuListPage: "popup-menu",
    ProfileListPage: "profile",
    SideMenuPage: "side-menu",
    TimelinePage: "timeline",
    SlidesPage: "slides",
    ThemingPage: "theming"
  };

  constructor() {
    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }
}

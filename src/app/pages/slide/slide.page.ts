import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  items = [
    {
      title: 'Color changing sliders',
      page: 'SlideColorChangingPage'
    },
    {
      title: 'Custom pagination',
      page: 'SlideCustomPaginationPage'
    },
    {
      title: 'Free mode slide (no fixed positions)',
      page: 'SlideFreeModePage'
    },
    {
      title: 'List of Sliders',
      page: 'SliderListPage'
    },
    {
      title: 'Nested slides',
      page: 'SlideNestedPage'
    },
    {
      title: 'Slide transitions',
      page: 'SlideTransitionsPage'
    },
    {
      title: 'Slide right to left',
      page: 'SlideRightToLeftPage'
    },
    {
      title: 'Slide with pagination arrows',
      page: 'SliderWithArrowsPage'
    },
    {
      title: 'Slide Walkthrough',
      page: 'SlideWalkthroughPage'
    }
  ];

  routes = {
    SlideColorChangingPage: "slide-color-changing",
    SlideCustomPaginationPage: "slide-custom-pagination",
    SlideFreeModePage: "slide-free-mode",
    SliderListPage: "slider-list",
    SlideNestedPage: "slide-nested",
    SlideTransitionsPage: "slide-transitions",
    SlideRightToLeftPage: "slide-right-to-left",
    SliderWithArrowsPage: "slider-with-arrows",
    SlideWalkthroughPage: "slide-walkthrough",
  }

  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  itemTapped(item) {
    this.router.navigate([this.routes[item.page]], { relativeTo: this.activatedRoute });
  }

}

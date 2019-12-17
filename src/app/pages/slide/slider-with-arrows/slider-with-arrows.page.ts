import { Component, OnInit } from '@angular/core';
import { SlidesEffects } from 'src/extensions';

@Component({
  selector: 'app-slider-with-arrows',
  templateUrl: './slider-with-arrows.page.html',
  styleUrls: ['./slider-with-arrows.page.scss'],
})
export class SliderWithArrowsPage implements OnInit {
  slidesOptions = {
    ...SlidesEffects.FADE,
    onlyExternal: false,
  }

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/lists/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/lists/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/lists/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/lists/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];

  canSwap = true;

  constructor() { }

  ngOnInit() {
  }

  onSlideChanged() {
    console.log("On Slide Changed");
  }

  private blockSwap() {
    this.canSwap = false;
    setTimeout(() => {
      this.canSwap = true
    }, 500);
  }

  prevSlide(slider, i) {
    if (this.canSwap) {
      if (this.slides[i - 1]) {
        slider.slidePrev();
      } else {
        slider.slideTo(this.slides.length - 1);
      }
      this.blockSwap();
    }
  }

  nextSlide(slider, i) {
    if (this.canSwap) {
      if (this.slides[i + 1]) {
        slider.slideNext();
      } else {
        slider.slideTo(0);
      }
      this.blockSwap();
    }
  }
}

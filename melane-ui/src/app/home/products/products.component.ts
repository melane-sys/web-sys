import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperOptions } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.appTwoReviewSwiper-Controller .swiper-button-next',
      prevEl: '.appTwoReviewSwiper-Controller .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

}

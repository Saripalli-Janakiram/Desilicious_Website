// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;

  // You can replace these with your restaurant dish images
  slides = [
    { src: 'assets/banner-1.jpg', caption: 'Authentic South Indian Breakfasts' },
    { src: 'assets/banner-2.jpg', caption: 'Place For Vegan' },
    { src: 'assets/banner-3.jpg', caption: 'Catering for Every Occasion' },
    { src: 'assets/banner-4.jpg', caption: '100% Vegetarian' },
     { src: 'assets/banner-5.jpg', caption: 'Delicious Vegetarian Meals' },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}

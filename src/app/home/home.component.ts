import { Component } from '@angular/core';
import { ArticleOneComponent } from "./article-one/article-one.component";
import { ArticleTwoComponent } from './article-two/article-two.component';
import { ArticleThreeComponent } from "./article-three/article-three.component";
import { CommonModule } from '@angular/common';
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [ArticleOneComponent, ArticleTwoComponent, ArticleThreeComponent, CommonModule, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showPopup = false;

  ngOnInit() {
    setTimeout(() => {
      this.showPopup = true;
    }, 2000); // 2 წამი
  }

  closePopup() {
    this.showPopup = false;
  }


}

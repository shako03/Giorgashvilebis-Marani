import { Component } from '@angular/core';
import { Article1AboutComponent } from "./article-1-about/article-1-about.component";
import { Article2AboutComponent } from "./article-2-about/article-2-about.component";
import { Article3AboutComponent } from "./article-3-about/article-3-about.component";
import { SliderComponent } from "../home/slider/slider.component";
import { ArticlePhotosComponent } from "./article-photos/article-photos.component";

@Component({
  selector: 'app-about',
  imports: [Article1AboutComponent, Article2AboutComponent, Article3AboutComponent, SliderComponent, ArticlePhotosComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

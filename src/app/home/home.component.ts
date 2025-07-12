import { Component } from '@angular/core';
import { ArticleOneComponent } from "./article-one/article-one.component";
import { ArticleTwoComponent } from './article-two/article-two.component';

@Component({
  selector: 'app-home',
  imports: [ArticleOneComponent, ArticleTwoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

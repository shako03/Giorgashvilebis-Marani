import { Component } from '@angular/core';
import { ArticleOneComponent } from "./article-one/article-one.component";

@Component({
  selector: 'app-home',
  imports: [ArticleOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

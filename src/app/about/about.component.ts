import { Component } from '@angular/core';
import { Article1AboutComponent } from "./article-1-about/article-1-about.component";
import { Article2AboutComponent } from "./article-2-about/article-2-about.component";
import { Article3AboutComponent } from "./article-3-about/article-3-about.component";

@Component({
  selector: 'app-about',
  imports: [Article1AboutComponent, Article2AboutComponent, Article3AboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

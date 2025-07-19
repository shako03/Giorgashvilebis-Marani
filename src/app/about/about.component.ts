import { Component } from '@angular/core';
import { Article1AboutComponent } from "./article-1-about/article-1-about.component";

@Component({
  selector: 'app-about',
  imports: [Article1AboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

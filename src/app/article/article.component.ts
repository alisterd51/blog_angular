import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ ArticleService ]
})
export class ArticleComponent {
  data: string;

  constructor(private articleService: ArticleService) {}

  download() {
    this.articleService.getMarkdown()
      .subscribe(results => {
        this.data = results;
        console.log(this.data);
      });
      console.log(this.data);
  }
}

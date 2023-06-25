import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  @Input()
  url: string = "https://cdn.anclarma.fr/articles/articles/blog-angular.md";
  data: string;

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.download();
  }

  download() {
    this.articleService.getMarkdown(this.url).subscribe(
      (results) => {
      this.data = results;
    },
    (error) => {
      this.data = 'Failed to download the article [' + this.url + '](' + this.url + ')';
    });
  }
}

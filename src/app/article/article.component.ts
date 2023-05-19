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
  url: string = "https://gitea.anclarma.fr/anclarma/articles/raw/branch/main/articles/blog-angular.md";
  data: string;

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.download();
  }

  download() {
    this.articleService.getMarkdown(this.url).subscribe((results) => {
      this.data = results;
    });
  }
}

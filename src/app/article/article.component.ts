import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  data: string;

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.download();
  }

  download() {
    this.articleService.getMarkdown().subscribe((results) => {
      this.data = results;
    });
  }
}

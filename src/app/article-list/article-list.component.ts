import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articleList: Article[];

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
      this.articleList = this.articleService.getArticles();
  }
}

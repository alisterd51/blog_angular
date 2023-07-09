import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  @Input()
  url: string = "https://cdn.anclarma.fr/articles/articles/blog-angular.md";
  //TODO a remplacer par un 404 si le nom de l'article n'est pas valid
  data: string;
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.article = this.articleService.getArticle(this.route.snapshot.paramMap.get('name'));
    if (this.article !== undefined) {
      this.url = this.article.url;
    }
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

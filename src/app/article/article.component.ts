import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input()
  url: string = "https://cdn.anclarma.fr/articles/articles/blog-angular.md";
  //TODO a remplacer par un 404 si le nom de l'article n'est pas valid
  param: string;
  data: string;
  articleSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('name');
    if (this.param === null) {
      this.download();
    } else {
      this.articleSubscription = this.articleService
        .getArticle(this.param)
        .subscribe(article => {
          this.url = article.url;
          this.download();
        })
    }
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  async download() {
    this.data = await lastValueFrom(
      this.articleService.getMarkdown(this.url),
      { defaultValue: 'Failed to download the article [' + this.url + '](' + this.url + ')' }
    );
  }
}

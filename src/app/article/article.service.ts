import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleList: Article[] = [
    {
      title: 'Création du présent site',
      summary: 'Création du présent site',
      url: 'https://cdn.anclarma.fr/articles/articles/blog-angular.md',
      path: 'blog-angular'
    },
    {
      title: 'vr-unparalleled-immersion',
      summary: 'vr-unparalleled-immersion',
      url: 'https://cdn.anclarma.fr/articles/articles/vr-unparalleled-immersion.md',
      path: 'vr-unparalleled-immersion'
    },
    {
      title: 'test',
      summary: 'summary',
      url: 'https://cdn.anclarma.fr/articles/articles/test.md',
      path: 'test'
    }
    ,
    {
      title: 'ads',
      summary: 'ads',
      url: 'https://cdn.anclarma.fr/articles/articles/ads.md',
      path: 'ads'
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getMarkdown(url: string) {
    return this.http.get(url, {responseType: 'text'});
  }

  getArticles(): Article[] {
    return this.articleList;
  }

  getArticle(name: string) {
    const article = this.articleList.find((article) => article.path === name)!;
    return article;
  }
}

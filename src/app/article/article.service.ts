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
      summary: 'Voici le premier article : La création de ce blog ! Du coup, je vais écrire ici toutes les étapes qui ont mené au blog tel qu\'il est aujourd\'hui.',
      url: 'https://cdn.anclarma.fr/articles/articles/blog-angular.md',
      path: 'blog-angular'
    },
    {
      title: 'Le futur de la réalité virtuelle',
      summary: 'La réalité virtuelle (RV) est un domaine en constante évolution de la technologie qui offre des expériences immersives captivantes.',
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
      title: 'Publicité',
      summary: 'test de google adsense',
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

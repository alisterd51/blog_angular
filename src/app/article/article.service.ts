import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getMarkdown(url: string) {
    return this.http.get(url, {responseType: 'text'});
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('https://api.blog.anclarma.fr/pages');
  }

  getArticle(name: string): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.path === name))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = "https://raw.githubusercontent.com/alisterd51/test_c/master/README.md";

  constructor(
    private http: HttpClient
  ) { }

  getMarkdown() {
    return this.http.get(this.url, {responseType: 'text'});
  }
}

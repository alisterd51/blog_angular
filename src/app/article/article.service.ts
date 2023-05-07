import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = "https://raw.githubusercontent.com/alisterd51/dolphin/master/Readme.md";

  constructor(
    private http: HttpClient
  ) { }

  getMarkdown() {
    return this.http.get(this.url, {responseType: 'text'});
  }
}

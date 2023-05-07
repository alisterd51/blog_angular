import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { HighlightService } from '../highlight/highlight.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit/*, AfterViewChecked*/ {
  data: string;
  // highlighted: boolean = false;

  constructor(
    private articleService: ArticleService,
    private highlightService: HighlightService
  ) {}

  ngOnInit(): void {
    this.download();
  }

  // ngAfterViewChecked(): void {
  //   if (this.data && ! this.highlighted) {
  //     this.highlightService.highlightAll();
  //     this.highlighted = true;
  //   }
  // }

  download() {
    this.articleService.getMarkdown().subscribe((results) => {
      this.data = results;
      console.log(this.data);
    });
    console.log(this.data);
  }
}

import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { HighlightService } from '../highlight/highlight.service';

const options = {
  prefix: "my-prefix-",
};

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewChecked {
  @Input()
  data = "# Hello World!";
  md!: string;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {
    marked.use(mangle());
    marked.use(gfmHeadingId(options));
    this.md = marked(this.data);
  }

  ngAfterViewChecked(): void {
    if (this.md && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

const options = {
  prefix: "my-prefix-",
};

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {
  @Input()
  data = "# Hello World!";
  md!: string;

  ngOnInit(): void {
    marked.use(mangle());
    marked.use(gfmHeadingId(options));
    this.md = marked(this.data);
  }
}

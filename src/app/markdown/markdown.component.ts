import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { marked } from 'marked';

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
    this.md = marked(this.data);
  }
}

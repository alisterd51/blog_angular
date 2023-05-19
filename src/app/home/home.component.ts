import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url: string = 'https://gitea.anclarma.fr/anclarma/articles/raw/branch/main/home/home.md';
}

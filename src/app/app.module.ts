import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MarkdownComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NgIconsModule.withIcons({ bootstrapGithub }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

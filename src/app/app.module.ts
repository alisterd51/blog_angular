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
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { CubeComponent } from './cube/cube.component';
import { HomeComponent } from './home/home.component';
import { TetrisComponent } from './tetris/tetris.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MarkdownComponent,
    NavbarComponent,
    CubeComponent,
    HomeComponent,
    TetrisComponent,
    FooterComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTreeModule,
    MatSidenavModule,
    NgIconsModule.withIcons({ bootstrapGithub }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

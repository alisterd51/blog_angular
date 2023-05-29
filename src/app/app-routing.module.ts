import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CubeComponent } from './cube/cube.component';
import { HomeComponent } from './home/home.component';
import { TetrisComponent } from './tetris/tetris.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'cube',
    component: CubeComponent,
  },
  {
    path: 'tetris',
    component: TetrisComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {path: 'home', component: StartComponent},
  {path: 'new', component: PostEditComponent},
  {path: 'post-detail/:id', component: PostDetailComponent },
  {path: 'post-detail/:id/edit', component: PostEditComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

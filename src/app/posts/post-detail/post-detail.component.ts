import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id: number

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          this.post = this.postsService.getPost(this.id);
        }
      );
  }

  onEditPost(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}

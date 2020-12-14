import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;
  constructor(
    public postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit(){
    if(this.editMode){
      this.postsService.updatePost(this.postForm.value, this.id);
    }else{
      this.postsService.addPost(this.postForm.value);
    }
    this.router.navigate(['/home']);
  }
  private initForm(){
    let title ='';
    let imgPath = '';
    let content = '';
    
    if(this.editMode){
      const post = this.postsService.getPost(this.id);
      title = post.title;
      imgPath = post.imgPath;
      content = post.details;
    }
    this.postForm = new FormGroup ({
      'title': new FormControl(title, Validators.required),
      'imgPath': new FormControl (imgPath, Validators.required),
      'content': new FormControl (content, Validators.minLength(20))
    });
  }

  onClear(){
    this.postForm.reset();
  }
  
  onCancel(){
    this.router.navigate(['../']);
  }

}

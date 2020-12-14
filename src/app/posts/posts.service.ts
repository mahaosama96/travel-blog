import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsChanged = new Subject<Post[]>();
  public posts: Post[]=[
    new Post ('Srylanka Beach',
      'Hannah',
      new Date,
        'njjgjkgkjgklgkgkhlhklhkhjgjghvgfyhjgkhbljnl;j;lkhkjgjhgjk',
        'https://media.timeout.com/images/105488768/1024/576/image.jpg'),
    new Post ('The Great Pyramides Like You Never Seen Before!',
      'Maha Osama',
      new Date,
      'njjgjkgkjgklgkgkhlhklhkhjgjghvgfyhjgkhbljnl;j;lkhkjgjhgjk',
      'https://cdn.britannica.com/42/94542-050-5C6B2249/Pyramids-Cairo-Giza-plateau.jpg' ),
    new Post ('Copenhagen: A Glittery Experience',
      'Ciara',
      new Date,
      'Places to eat: Geranium, Trattoria, Restaurant Marv & Ben Where to stay: Copenhagen Admiral airport, Copenhagen Marriott hotel, Radisson Blu How to reach: Kastrup airport is the nearest airport Tourist attractions: Tivoli Gardens, The Little Mermaid, Amalienborg',
      'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2020/01/Copenhagen_9th-jun.jpg')
  ];

  constructor() { }

  getPost(index: number){
    return this.posts[index];
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postsChanged.next(this.posts);
  }

  updatePost(newPost: Post, index: number){
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts);
  }
}

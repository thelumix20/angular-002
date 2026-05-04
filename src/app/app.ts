import { Component, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { PostsService } from './services/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('posts-get');
    posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
  }
}

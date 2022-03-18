import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/@models/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from './state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$ : Observable<Post[]>;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }
}

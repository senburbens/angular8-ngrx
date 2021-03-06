import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../@models/post.model';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  postForm: FormGroup;
  post: Post;
  postSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription)
      this.postSubscription.unsubscribe();
  }

  private createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  onUpdatePost() {
    if (!this.postForm.valid) return;

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title: title,
      description: description
    }
    // dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  public showDescriptionErrors(): string | void {
    const descriptionForm = this.postForm.get('description');

    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) return 'Description is required';
      if (descriptionForm.errors.minlength)
        return 'Description should be of minimum 10 characters length';
    }
  }
}

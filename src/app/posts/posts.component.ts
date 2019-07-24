import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider/data-provider.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'm-posts',
  template: `
    <p>
      posts:
    </p>
    <ul *ngIf="posts$ | async as posts">
      <li *ngFor="let post of posts.data">
        <pre>{{ post.title }}</pre>
      </li>
    </ul>
  `,
  styles: []
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts$: Observable<any>;

  constructor(private dataProvider: DataProviderService) {
    this.posts$ = this.dataProvider.getFromStore('posts');
  }

  ngOnInit() {
    this.dataProvider.sendRequest({key: 'posts'});
  }

  ngOnDestroy(): void {
    this.dataProvider.clearStore('posts');
  }
}

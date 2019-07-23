import { Component, OnInit } from '@angular/core';
import {DataProviderService} from '../data-provider/data-provider.service';
import {MyService} from '../my-service/my-service.service';

@Component({
  selector: 'm-posts',
  template: `
    <p>
      posts works!
    </p>
  `,
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(private dataProvider: DataProviderService, myService: MyService) {
    console.group('PostsComponent Constructor');
    console.log('myService injectable');
    console.log(JSON.stringify(myService));
    console.groupEnd();
  }

  ngOnInit() {
    console.group('PostsComponent');
    console.log('PostsComponent');
    this.dataProvider.fetch();
    console.groupEnd();
  }
}

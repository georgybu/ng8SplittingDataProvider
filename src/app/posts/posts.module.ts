import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {MyServiceModule} from '../my-service/my-service.module';

@NgModule({
  declarations: [PostsComponent],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    DataProviderModule.forFeature({url: 'https://jsonplaceholder.typicode.com/posts'}),
    MyServiceModule
  ]
})
export class PostsModule {
}

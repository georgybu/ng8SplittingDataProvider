import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {MyServiceModule} from '../my-service/my-service.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PostsApiService} from './posts-api.service';

@NgModule({
  declarations: [
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataProviderModule.forFeature({url: 'https://jsonplaceholder.typicode.com/posts', api: PostsApiService}),
    MyServiceModule
  ]
})
export class PostsModule {
}

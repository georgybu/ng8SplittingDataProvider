import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {PostsApiService} from '../posts/posts-api.service';

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataProviderModule.forFeature(PostsApiService)
  ]
})
export class UsersModule {
}

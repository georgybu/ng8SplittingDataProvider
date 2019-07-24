import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {UsersApiService} from '../users/users-api.service';

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
    DataProviderModule.forFeature(UsersApiService)
  ]
})
export class PostsModule {
}

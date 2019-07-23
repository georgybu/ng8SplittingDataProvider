import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';
import {MyServiceModule} from './my-service/my-service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    MyServiceModule.forRoot({
      retryInterval: 9999,
      retryCount: 35
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

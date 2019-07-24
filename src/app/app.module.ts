import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';
import {HttpClientModule} from '@angular/common/http';
import {DataProviderModule} from './data-provider/data-provider.module';
import {AppApiService} from './app-api.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store';
import {HttpEffects} from './store/http.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    HttpClientModule,
    DataProviderModule.forRoot(AppApiService),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HttpEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {UsersApiService} from './users-api.service';

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataProviderModule.forFeature(UsersApiService)
  ]
})
export class UsersModule {
}

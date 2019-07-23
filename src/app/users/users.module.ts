import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {MyServiceModule} from '../my-service/my-service.module';

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    DataProviderModule.forFeature({url: 'https://jsonplaceholder.typicode.com/users'}),
    MyServiceModule.forChild({
      retryInterval: 5005,
      retryCount: 35
    })
  ]
})
export class UsersModule { }

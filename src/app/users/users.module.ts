import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {DataProviderModule} from '../data-provider/data-provider.module';
import {MyServiceModule} from '../my-service/my-service.module';
import {s1token} from '../service1/service_token';
import {UsersApiService} from './users-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataProviderModule.forFeature({url: 'https://jsonplaceholder.typicode.com/users'}),
    MyServiceModule.forChild({
      retryInterval: 5005,
      retryCount: 35
    })
  ],
  providers: [
    {
      provide: s1token,
      useClass: UsersApiService,
      multi: true
    }
  ]
})
export class UsersModule {
}

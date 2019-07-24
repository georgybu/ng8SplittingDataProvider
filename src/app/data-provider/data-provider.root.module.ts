import {Inject, NgModule, Type} from '@angular/core';
import {DATA_PROVIDER_ROOT_APIS} from './data-provider.token';
import {DataProviderService} from './data-provider.service';

@NgModule({})
export class DataProviderRootModule {
  constructor(private dataProvider: DataProviderService, @Inject(DATA_PROVIDER_ROOT_APIS) apis: Type<any>[]) {
    apis.forEach(api => this.dataProvider.addApi(api));
  }

  addApis(apis) {
    apis.forEach(api => this.dataProvider.addApi(api));
  }
}

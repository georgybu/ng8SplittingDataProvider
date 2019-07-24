import {Inject, NgModule, Type} from '@angular/core';
import {DATA_PROVIDER_FEATURE_APIS} from './data-provider.token';
import {DataProviderRootModule} from './data-provider.root.module';

@NgModule({})
export class DataProviderFeatureModule {
  constructor(root: DataProviderRootModule,
              @Inject(DATA_PROVIDER_FEATURE_APIS) apiGroups: Type<any>[][]) {
    apiGroups.forEach(apis => root.addApis(apis));
  }
}

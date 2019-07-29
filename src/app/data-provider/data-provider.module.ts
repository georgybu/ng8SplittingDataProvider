import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {DataProviderService} from './data-provider.service';
import {DATA_PROVIDER_FEATURE_APIS, DATA_PROVIDER_ROOT_APIS} from './data-provider.token';
import {HttpClientModule} from '@angular/common/http';
import {DataProviderFeatureModule} from './data-provider.feature.module';
import {DataProviderRootModule} from './data-provider.root.module';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class DataProviderModule {
  static forRoot(api: Type<any>): ModuleWithProviders {
    return {
      ngModule: DataProviderRootModule,
      providers: [
        DataProviderService,
        api,
        {
          provide: DATA_PROVIDER_ROOT_APIS,
          deps: [api],
          useFactory: createSourceInstances,
        },
      ]
    };
  }

  static forFeature(api: Type<any>): ModuleWithProviders {
    return {
      ngModule: DataProviderFeatureModule,
      providers: [
        DataProviderService,
        api,
        {
          provide: DATA_PROVIDER_FEATURE_APIS,
          multi: true,
          deps: [api],
          useFactory: createSourceInstances,
        },
      ]
    };
  }
}

export function createSourceInstances(...instances: any[]) {
  return instances;
}

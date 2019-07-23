// Import the core angular services.
import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
// Import the application components and services.
import {MyService, MyServiceOptions} from './my-service.service';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Re-export services, treating the module like a "barrel".
export {MyService};
export {MyServiceOptions};

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule()
export class MyServiceModule {

  static forRoot(options?: ModuleOptions): ModuleWithProviders {
    return ({
      ngModule: MyServiceModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: MyServiceOptions,
          useFactory: provideMyServiceOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    });
  }

  static forChild(options?: ModuleOptions): ModuleWithProviders {
    return ({
      ngModule: MyServiceModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: MyServiceOptions,
          useFactory: provideMyServiceOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    });
  }

}

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// I define the shape of the optional configuration data passed to the forRoot() method.
export interface ModuleOptions {
  retryCount?: number;
  retryInterval?: number;
}

// I am the token that makes the raw options available to the following factory function.
// --
// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>('forRoot() MyService configuration.');

// I translate the given raw OPTIONS into an instance of the MyServiceOptions TYPE. This
// will allows the MyService class to be instantiated and injected with a fully-formed
// configuration class instead of having to deal with the Inject() meta-data and a half-
// baked set of configuration options.
// --
// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export function provideMyServiceOptions(options?: ModuleOptions): MyServiceOptions {

  var myServiceOptions = new MyServiceOptions();

  // If the optional options were provided via the .forRoot() static method, then apply
  // them to the MyServiceOptions Type provider.
  if (options) {

    if (typeof (options.retryCount) === 'number') {

      myServiceOptions.retryCount = options.retryCount;

    }

    if (typeof (options.retryInterval) === 'number') {

      myServiceOptions.retryInterval = options.retryInterval;

    }

  }

  return (myServiceOptions);

}

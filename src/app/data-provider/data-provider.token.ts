import {InjectionToken, Type} from '@angular/core';

export const DATA_PROVIDER_ROOT_APIS = new InjectionToken<Type<any>>('Data Provider: Root Apis');

export const DATA_PROVIDER_FEATURE_APIS = new InjectionToken<Type<any>>('Data Provider: Feature Apis');

import {Injectable, Injector} from '@angular/core';
import {s1token} from './service_token';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor(private injector: Injector) {
    console.log('s1token', s1token);
    const services = this.injector.get(s1token, []);
    console.log(services);
    services.forEach(s => {
      s.getUsers().subscribe();
      console.log(s);
    })
  }

}

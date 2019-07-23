import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsApiService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

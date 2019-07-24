export interface IAsyncResult<T> {
  loading: boolean;
  loaded?: boolean;
  data: T;
  error: any;
  meta?: any;
  status?: any;
}

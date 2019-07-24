/**
 * Based on
 * https://www.bennadel.com/blog/3522-creating-a-simple-setstate-store-using-an-rxjs-behaviorsubject-in-angular-6-1-10.htm
 * https://github.com/bennadel/JavaScript-Demos/tree/master/demos/simple-store-set-state-angular6
 */
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

export class SimpleStore<StateType = any> {
  private stateSubject: BehaviorSubject<StateType>;

  constructor(initialState: StateType) {
    this.stateSubject = new BehaviorSubject(initialState);
  }

  public getState(): Observable<StateType> {
    return this.stateSubject.pipe(distinctUntilChanged());
  }

  public getStateSnapshot(): StateType {
    return this.stateSubject.getValue();
  }

  public select<K extends keyof StateType>(key: K): Observable<StateType[K]> {
    const selectStream = this.stateSubject.pipe(
      map((state: StateType) => {
        return state[key];
      }),
      distinctUntilChanged()
    );

    return selectStream;
  }

  public setState(partialState: Partial<StateType>): void {
    const currentState = this.getStateSnapshot();
    const nextState = Object.assign({}, currentState, partialState);
    this.stateSubject.next(nextState);
  }
}

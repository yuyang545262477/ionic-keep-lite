import {Observable} from "rxjs";

export interface Abs_action<T> {

    getState(): Observable<T[]>;

    setState(state: T[]): void;
}

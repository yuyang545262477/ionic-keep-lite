import {Observable} from "rxjs";

export interface Abs_interface<T> {

    getState(): Observable<T[]>;

    setState(state: T[]): Observable<T[]>
}

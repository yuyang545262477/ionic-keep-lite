import {Observable} from "rxjs";

export interface IStorageAction<T> {
    addItem(item: T): Observable<T[]>

    removeItem(key: number): Observable<T[]>

    modifyItem<R extends keyof T>(key: R, value: T[R]): Observable<T[]>

    getItems(): Observable<T[]>

}

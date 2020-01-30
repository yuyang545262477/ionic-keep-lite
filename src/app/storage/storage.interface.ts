import {Observable} from "rxjs";

export interface IStorageAction<T> {
    //增
    addItem(item: T): Observable<T[]>

    //删
    removeItem(uniKey: string): Observable<T[]>

    //改
    modifyItem<R extends keyof T>(uniKey: string, key: R, value: T[R]): Observable<T[]>

    //查
    getItems(): Observable<T[]>

}

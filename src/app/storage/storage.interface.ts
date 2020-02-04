import {Observable} from "rxjs";

export interface IStorageAction<T> {
    //获取
    getItems(): Observable<T>

    //设置
    setItems(items: T): Observable<T>

}

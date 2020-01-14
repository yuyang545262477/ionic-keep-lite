import {Injectable} from '@angular/core';
import {abs_storage} from '@storage/abs_storage.';
import {ITag} from '@models/tap.model';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs';
import {IStorageAction} from '@storage/storage.interface';

@Injectable({
    providedIn: 'root',
})
export class TagStorageService extends abs_storage<ITag[]> implements IStorageAction<ITag[]> {
    constructor(protected storage: Storage) {
        super(storage, 'tags');
    }

    //TODO:将缓存操作.放在此场.而不是effects层.
    addItem(item: ITag): Observable<ITag[]> {
        return [];
    }

    getItems(): Observable<ITag[]> {
        return [];
    }

    modifyItem<R extends keyof ITag>(key: R, value: ITag[R]): Observable<ITag[]> {
        return [];
    }

    removeItem(key: number): Observable<ITag[]> {
        return [];
    }


}

import {Abs_interface} from '@storage/abs_interface';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {shareReplay, tap} from 'rxjs/operators';
import {TStorageKeys} from '@models/storage.type';

export abstract class abs_storage<T> implements Abs_interface<T> {
    private cacheState: Observable<T>;
    private readonly CACHE_SIZE = 1;

    protected constructor(protected readonly storage: Storage,
                          protected readonly storageKey: TStorageKeys) {
    }

    getState(): Observable<T> {
        if (this.cacheState) {
            return this.cacheState;
        }
        this.cacheState = this.renderCache();
        return this.cacheState;
    }

    setState(states: T): Observable<T> {
        return fromPromise(this.storage.set(this.storageKey, states))
            .pipe(
                tap(() => this.cacheState = this.renderCache()),
            );
    }

    private renderCache() {
        return fromPromise(this.storage.get(this.storageKey))
            .pipe(
                shareReplay(this.CACHE_SIZE),
            );
    }


}

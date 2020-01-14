import {Abs_interface} from "@storage/abs_interface";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {shareReplay, tap} from "rxjs/operators";
import {TStorageKeys} from "@models/storage.type";

export abstract class abs_storage<T> implements Abs_interface<T> {
    protected cacheState: Observable<T[]>;
    private readonly CACHE_SIZE = 1;

    protected constructor(protected readonly storage: Storage,
                          protected readonly storageKey: TStorageKeys) {
    }

    getState(): Observable<T[]> {
        if (this.cacheState) {
            return this.cacheState;
        }
        this.cacheState = fromPromise(this.storage.get(this.storageKey)).pipe(shareReplay(this.CACHE_SIZE));
        return this.cacheState;
    }

    setState(state: T[]): Observable<T[]> {
        return fromPromise(this.storage.set(this.storageKey, state)).pipe(
            // @ts-ignore
            tap(() => this.cacheState = null),
        );
    }


}

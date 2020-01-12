import {Abs_action} from "@storage/abs_action";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {shareReplay} from "rxjs/operators";

export abstract class abs_storage<T> implements Abs_action<T> {
    protected cacheState: Observable<T[]>;
    private CACHE_SIZE = 1;

    protected constructor(protected readonly storage: Storage,
                          protected readonly storageKey: string) {
    }

    getState(): Observable<T[]> {
        if (this.cacheState) {
            return this.cacheState;
        }
        this.cacheState = fromPromise(this.storage.get(this.storageKey)).pipe(shareReplay(this.CACHE_SIZE));
        return this.cacheState;
    }

    setState(state: T[]): void {
        this.cacheState = fromPromise(this.storage.set(this.storageKey, state)).pipe(shareReplay(this.CACHE_SIZE));
    }


}

import {Storage} from "@ionic/storage";
import {TStorageKeys} from "@models/storage.type";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {shareReplay, tap} from "rxjs/operators";

export abstract class abs_storage<T> {
    private cacheState: Observable<T>;
    private readonly CACHE_SIZE = 1;

    protected constructor(protected readonly storage: Storage,
                          protected readonly storageKey: TStorageKeys) {
    }

    /*获取状态*/
    protected getState(): Observable<T> {
        if (this.cacheState) {
            return this.cacheState;
        }
        this.cacheState = this.renderCache();
        return this.cacheState;
    }

    /*设置状态*/
    protected setState(states: T): Observable<T> {
        return fromPromise(this.storage.set(this.storageKey, states))
            .pipe(
                tap(() => this.cacheState = this.renderCache()),
            );
    }

    private renderCache() {
        return fromPromise(this.storage.get(this.storageKey)).pipe(shareReplay(this.CACHE_SIZE));
    }


}

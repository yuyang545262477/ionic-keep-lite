import {Injectable} from "@angular/core";
import {abs_storage} from "@storage/abs_storage.";
import {ITag} from "@models/tap.model";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {IStorageAction} from "@storage/storage.interface";
import {map, mergeMap} from "rxjs/operators";
import produce from "immer";

@Injectable({
    providedIn: "root",
})
export class TagStorageService extends abs_storage<ITag[]> implements IStorageAction<ITag> {
    constructor(protected storage: Storage) {
        super(storage, "tags");
    }

    addItem(item: ITag): Observable<ITag[]> {
        return super.getState().pipe(
            map(value => [...value, item]),
            mergeMap(value => this.setState(value)),
        );
    }

    getItems(): Observable<ITag[]> {
        return super.getState();
    }

    modifyItem<R extends keyof ITag>(uniKey: number, key: R, value: ITag[R]): Observable<ITag[]> {
        return super.getState().pipe(
            map((iTags: ITag[]) =>
                produce(iTags, (tags: ITag[]) => {
                    const findIndex = tags.findIndex(item => item.id === uniKey);
                    tags[findIndex][key] = value;
                }),
            ),
            mergeMap((iTags: ITag[]) => super.setState(iTags)),
        );
    }

    removeItem(uniKey: number): Observable<ITag[]> {
        return super.getState().pipe(
            map((iTags) => {
                const findIndex = iTags.findIndex(value => value.id === uniKey);
                return [...iTags.slice(0, findIndex), ...iTags.slice(findIndex + 1)];
            }),
            mergeMap((value: ITag[], index) => super.setState(value)),
        );
    }


}

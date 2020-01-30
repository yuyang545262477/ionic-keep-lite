import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {ITag} from "@models/tap.model";
import {abs_storage} from "@storage/abs_storage.";
import {IStorageAction} from "@storage/storage.interface";
import produce from "immer";
import {Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class TagStorageService extends abs_storage<ITag[]> implements IStorageAction<ITag> {
    constructor(protected storage: Storage) {
        super(storage, "tags");
    }

    addItem(item: ITag): Observable<ITag[]> {
        return super.getState().pipe(
            map((value) => {
                if (!Array.isArray(value)) {
                    value = [];
                }
                return [...value, item];
            }),
            mergeMap(value => this.setState(value)),
        );
    }

    getItems(): Observable<ITag[]> {
        return super.getState();
    }

    modifyItem<R extends keyof ITag>(uniKey: string, key: R, value: ITag[R]): Observable<ITag[]> {
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

    removeItem(uniKey: string): Observable<ITag[]> {
        return super.getState().pipe(
            map((iTags) => {
                const findIndex = iTags.findIndex(value => value.id === uniKey);
                return [...iTags.slice(0, findIndex), ...iTags.slice(findIndex + 1)];
            }),
            mergeMap((value: ITag[]) => super.setState(value)),
        );
    }

}

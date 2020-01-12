import {Injectable} from "@angular/core";
import {abs_storage} from "@storage/abs_storage.";
import {ITag} from "@models/tap.model";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TagStorageService extends abs_storage<ITag> {
    constructor(protected storage: Storage) {
        super(storage, "tags");
    }

    getState(): Observable<ITag[]> {
        return super.getState();
    }

    setState(state: ITag[]): void {
        super.setState(state);
    }
}

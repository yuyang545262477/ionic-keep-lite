import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {IList} from "@models/IList";
import {abs_storage} from "@storage/abs_storage.";
import {IStorageAction} from "@storage/storage.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ListStorageService extends abs_storage<IList[]> implements IStorageAction<IList[]> {

    constructor(protected  storage: Storage) {
        super(storage, "lists");
    }

    getItems(): Observable<IList[]> {
        return super.getState();
    }

    setItems(items: IList[]): Observable<IList[]> {
        return super.setState(items);
    }


}

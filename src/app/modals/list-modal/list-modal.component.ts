import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {IList} from "@models/IList";
import {select, Store} from "@ngrx/store";
import {ListStoreAction, ListStoreSelector, ListStoreState} from "@redux/list-state";
import {Observable} from "rxjs";

@Component({
    selector: "app-list-modal",
    templateUrl: "./list-modal.component.html",
    styleUrls: ["./list-modal.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListModalComponent implements OnInit {
    chosenList$: Observable<IList>;

    constructor(private  listStore: Store<ListStoreState.State>) {
        this.chosenList$ = listStore.pipe(select(ListStoreSelector.selectListByChosenId));
    }

    ngOnInit() {
    }

    closeListModal() {
        this.listStore.dispatch(
            ListStoreAction.closeListModal(),
        );
    }
}

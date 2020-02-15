import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ListStoreAction, ListStoreState} from "@redux/list-state";

@Component({
    selector: "app-add-list",
    templateUrl: "./add-list.component.html",
    styleUrls: ["./add-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddListComponent implements OnInit {

    constructor(private listStore: Store<ListStoreState.State>) {
    }

    ngOnInit() {
    }

    openListModal() {
        this.listStore.dispatch(
            ListStoreAction.openChosenModal(),
        );
    }
}

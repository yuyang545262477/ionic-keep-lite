import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {RootStoreAction, RootStoreState} from "@redux/index";
import {uuid4} from "@capacitor/core/dist/esm/util";

@Component({
    selector: "list-menu-bar",
    templateUrl: "./list-menu-bar.component.html",
    styleUrls: ["./list-menu-bar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMenuBarComponent implements OnInit {

    constructor(private appStore: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
    }

    openListModal() {
        this.appStore.dispatch(
            RootStoreAction.openListModal({tagId: uuid4()}),
        );
    }
}

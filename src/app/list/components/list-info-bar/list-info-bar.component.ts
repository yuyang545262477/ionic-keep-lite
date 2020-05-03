import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {RootStoreAction, RootStoreState} from "@redux/index";
import {uuid4} from "@capacitor/core/dist/esm/util";

@Component({
    selector: "list-info-bar",
    templateUrl: "./list-info-bar.component.html",
    styleUrls: ["./list-info-bar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoBarComponent implements OnInit {

    constructor(private appStore: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
    }

    openSideMenu() {
        this.appStore.dispatch(
            RootStoreAction.openSideMenu(),
        );
    }

    openUserModal() {
        this.appStore.dispatch(
            RootStoreAction.openUserModal(),
        );
    }

    openListModal() {
        this.appStore.dispatch(
            RootStoreAction.openListModal({
                tagId: uuid4(),
            }),
        );
    }
}

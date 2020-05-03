import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {RootStoreAction, RootStoreState} from "@redux/index";

@Component({
    selector: "user-modal",
    templateUrl: "./user-modal.component.html",
    styleUrls: ["./user-modal.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModalComponent implements OnInit {

    constructor(private appStore: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
    }

    closeModal() {
        this.appStore.dispatch(
            RootStoreAction.closeUserModal(),
        );
    }
}

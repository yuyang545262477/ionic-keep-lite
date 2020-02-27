import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {RootStoreState} from "@redux/index";
import {IMenuItem, menuItems} from "../../menu-list";

@Component({
    selector: "side-menu-list",
    templateUrl: "./menu-list.component.html",
    styleUrls: ["./menu-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent implements OnInit {
    appPages = menuItems;

    constructor(private rootStore: Store<RootStoreState.State>) {
    }

    ngOnInit() {
    }

    TrackByPageUrl = (_: number, item: IMenuItem) => item.url;

    dispatchAction(event: () => Action) {
        this.rootStore.dispatch(event());
    }

}

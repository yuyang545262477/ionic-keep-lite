import {Component, OnInit} from "@angular/core";
import {IList} from "@models/IList";
import {ITag} from "@models/tap.model";
import {select, Store} from "@ngrx/store";
import {ListStoreSelector, ListStoreState} from "@redux/list-state";
import {TagStoreSelectors, TagStoreState} from "@redux/tag-state";
import {Observable} from "rxjs";
import {RootStoreSelectors, RootStoreState} from "@redux/index";

@Component({
    selector: "app-list",
    templateUrl: "list.page.html",
    styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
    chosenTag$: Observable<ITag>;
    lists$: Observable<IList[]>;
    isLoading$: Observable<boolean>;

    constructor(private tagStore: Store<TagStoreState.State>,
                private appStore: Store<RootStoreState.State>,
                private listStore: Store<ListStoreState.State>) {
        this.chosenTag$ = this.tagStore.pipe(select(TagStoreSelectors.selectTagChosenInfo));
        this.lists$ = this.listStore.pipe(select(ListStoreSelector.selectAllList));
        this.isLoading$ = appStore.pipe(select(RootStoreSelectors.selectAllIsLoading));
    }

    ngOnInit() {
    }

    trackByItemId = (_: number, item: IList) => item.id;

}

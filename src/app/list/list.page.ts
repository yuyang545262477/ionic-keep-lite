import {Component, OnInit} from "@angular/core";
import {IList} from "@models/IList";
import {ITag} from "@models/tap.model";
import {select, Store} from "@ngrx/store";
import {ListStoreSelector, ListStoreState} from "@redux/list-state";
import {TagStoreSelectors, TagStoreState} from "@redux/tag-state";
import {Observable} from "rxjs";

@Component({
    selector: "app-list",
    templateUrl: "list.page.html",
    styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
    chosenTag$: Observable<ITag>;
    lists$: Observable<IList[]>;

    constructor(private tagStore: Store<TagStoreState.State>,
                private listStore: Store<ListStoreState.State>) {
        this.chosenTag$ = this.tagStore.pipe(select(TagStoreSelectors.selectTagChosenInfo));
        this.lists$ = this.listStore.pipe(select(ListStoreSelector.selectAllList));
    }

    ngOnInit() {
    }

    trackByItemId = (_: number, item: IList) => item.id;

}

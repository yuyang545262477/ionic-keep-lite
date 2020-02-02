import {Component, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {select, Store} from "@ngrx/store";
import {TagStoreSelectors, TagStoreState} from "@redux/tag-state";
import {Observable} from "rxjs";

@Component({
    selector: "app-list",
    templateUrl: "list.page.html",
    styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
    chosenTag$: Observable<ITag>;

    constructor(private tagStore: Store<TagStoreState.State>) {
        this.chosenTag$ = this.tagStore.pipe(select(TagStoreSelectors.selectTagChosenInfo));
    }

    ngOnInit() {
    }

}

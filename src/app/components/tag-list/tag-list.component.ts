import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {TagStoreSelectors, TagStoreState} from "../../states/tag-state";

@Component({
    selector: "app-tag-list",
    templateUrl: "./tag-list.component.html",
    styleUrls: ["./tag-list.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private tagsStore: Store<TagStoreState.State>) {
        this.tags$ = tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    TrackByTagId = (_: number, item: ITag) => item.id;

    ngOnInit() {
    }


}

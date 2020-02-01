import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {openTagModal} from "@redux/action";
import {RootStoreState} from "@redux/index";
import {loadTags} from "@redux/tag-state/tag.actions";
import {Observable} from "rxjs";
import {TagStoreSelectors, TagStoreState} from "../../states/tag-state";

@Component({
    selector: "app-tag-list",
    templateUrl: "./tag-list.component.html",
    styleUrls: ["./tag-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private tagsStore: Store<TagStoreState.State>,
                private appStore: Store<RootStoreState.State>) {
        this.tags$ = this.tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    ngOnInit() {
        this.tagsStore.dispatch(loadTags());
    }

    TrackByTagId = (_: number, item: ITag) => item.id;

    openTagModal() {
        this.appStore.dispatch(
            openTagModal(),
        );
    }
}

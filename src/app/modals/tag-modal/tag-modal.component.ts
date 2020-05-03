import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {RootStoreAction, RootStoreState} from "@redux/index";
import {Observable} from "rxjs";
import {TagStoreSelectors, TagStoreState} from "../../states/tag-state";

@Component({
    selector: "app-tag-modal",
    templateUrl: "./tag-modal.component.html",
    styleUrls: ["./tag-modal.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagModalComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private rootStore: Store<RootStoreState.State>,
                private tagsStore: Store<TagStoreState.State>) {
        this.tags$ = this.tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    ngOnInit() {
    }

    closeModal() {
        this.rootStore.dispatch(
            RootStoreAction.closeTagModal(),
        );
    }

    TrackByTagId = (_: number, item: ITag) => item.id;
}

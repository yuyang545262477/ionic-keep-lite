import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {loadTags} from "@redux/tag-state/tag.actions";
import {Observable} from "rxjs";
import {TagStoreSelectors, TagStoreState} from "../../states/tag-state";
import {TagModalService} from "../../tag-modal/services/tag-modal.service";
import {TagModalComponent} from "../../tag-modal/tag-modal/tag-modal.component";

@Component({
    selector: "app-tag-list",
    templateUrl: "./tag-list.component.html",
    styleUrls: ["./tag-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private tagsStore: Store<TagStoreState.State>,
                private tagModalService: TagModalService) {
        this.tags$ = this.tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    ngOnInit() {
        this.tagsStore.dispatch(loadTags());
    }

    TrackByTagId = (_: number, item: ITag) => item.id;

    openTagModal() {
        this.tagModalService.present(TagModalComponent);
    }
}

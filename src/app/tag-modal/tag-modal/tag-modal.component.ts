import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TagStoreSelectors, TagStoreState} from "../../states/tag-state";
import {TagModalService} from "../services/tag-modal.service";

@Component({
    selector: "app-tag-modal",
    templateUrl: "./tag-modal.component.html",
    styleUrls: ["./tag-modal.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TagModalComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private tagModalService: TagModalService,
                private tagsStore: Store<TagStoreState.State>) {
        this.tags$ = this.tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    TrackByTagId = (_: number, item: ITag) => item.id;

    ngOnInit() {
    }

    closeModal() {
        this.tagModalService.dismiss();
    }

    doCreate() {
        console.log("doCreate");
    }

    cancelCreate() {
        console.log("cancelCreate");
    }
}

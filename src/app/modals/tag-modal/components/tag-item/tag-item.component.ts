import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Store} from "@ngrx/store";
import {TagStoreState} from "@redux/tag-state";
import {removeTag, updateTagEdit, updateTagName} from "@redux/tag-state/tag.actions";

@Component({
    selector: "app-tag-item",
    templateUrl: "./tag-item.component.html",
    styleUrls: ["./tag-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagItemComponent implements OnInit {
    @Input() tagItem: ITag;

    constructor(private  tagStore: Store<TagStoreState.State>) {
    }

    ngOnInit() {
    }

    removeTag(id: string) {
        this.tagStore.dispatch(removeTag({tagId: id}));
    }

    changeEdit() {
        this.tagStore.dispatch(
            updateTagEdit({
                disStatus: !this.tagItem.isEdit,
                uniKey: this.tagItem.id,
            }),
        );
    }

    applyEdit(tagName: string) {
        this.tagStore.dispatch(
            updateTagName({
                    uniKey: this.tagItem.id,
                    tagName,
                },
            ),
        );
    }
}

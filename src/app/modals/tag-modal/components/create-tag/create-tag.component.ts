import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {TagStoreState} from "@redux/tag-state";
import {addingTag, resetTempTagName, updateTempTagName} from "@redux/tag-state/tag.actions";
import {selectFeatureTempTagName} from "@redux/tag-state/tag.selectors";
import {Observable} from "rxjs";

@Component({
    selector: "app-create-tag",
    templateUrl: "./create-tag.component.html",
    styleUrls: ["./create-tag.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTagComponent implements OnInit {
    tempTagName$: Observable<string>;

    constructor(private tagStore: Store<TagStoreState.State>) {
    }

    ngOnInit() {
        this.tempTagName$ = this.tagStore.pipe(select(selectFeatureTempTagName));
    }

    resetTagName() {
        this.tagStore.dispatch(resetTempTagName());
    }

    doCreate(tagName: string) {
        this.tagStore.dispatch(
            addingTag({name: tagName}),
        );
    }

    tagInputChange($event: CustomEvent) {
        const tempTagName = $event.detail.value;
        this.tagStore.dispatch(
            updateTempTagName({tempTagName}),
        );
    }
}

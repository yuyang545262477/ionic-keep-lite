import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ITag} from '@models/tap.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TagStoreSelectors, TagStoreState} from '../../states/tag-state';
import {TagModalService} from '../../tag-modal/services/tag-modal.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {
    tags$: Observable<ITag[]>;

    constructor(private tagsStore: Store<TagStoreState.State>,
                private tagModalService: TagModalService) {
        this.tags$ = tagsStore.select(TagStoreSelectors.selectAllMTags);
    }

    TrackByTagId = (_: number, item: ITag) => item.id;

    ngOnInit() {
    }


    openTagModal() {
        this.tagModalService.present();
    }
}

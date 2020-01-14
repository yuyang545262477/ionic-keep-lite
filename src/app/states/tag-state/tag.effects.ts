import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as fromTagActions from "./tag.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {TagStorageService} from "@storage/tag-storage.service";
import {of} from "rxjs";
import {ITag} from "@models/tap.model";

@Injectable()
export class TagEffects {
    /*增加*/
    addTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.addingTag),
            mergeMap((action) => this.tagStorageService.getState()
                .pipe(
                    map((tags: ITag[]) => [...tags, action.data]),
                    mergeMap((tags: ITag[]) => this.tagStorageService.setState(tags)
                        .pipe(
                            map(value => fromTagActions.addTagSuccess({data: value})),
                            catchError(err => of(fromTagActions.addTagError({error: err}))),
                        ),
                    ),
                ),
            ),
        ),
    );
    /*删除*/
    /*修改*/


    /*加载*/
    loadTags$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.loadTags),
            mergeMap(() => this.tagStorageService.getState()
                .pipe(
                    map((value) => fromTagActions.loadTagsSuccess({data: value})),
                    catchError(err => of(fromTagActions.loadTagsFailure({error: err}))),
                ),
            ),
        ),
    );


    constructor(private actions$: Actions,
                private tagStorageService: TagStorageService) {
    }


}

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TagStorageService} from "@storage/tag-storage.service";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import * as fromTagActions from "./tag.actions";

@Injectable()
export class TagEffects {
    /*增加*/
    addTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.addingTag),
            mergeMap((action) => this.tagStorageService.addItem(action.data).pipe(
                map(value => fromTagActions.addTagSuccess({data: value})),
                catchError(err => of(fromTagActions.addTagError({error: err}))),
            )),
        ),
    );
    /*删除*/
    removeTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.removeTag),
            mergeMap((value) => this.tagStorageService.removeItem(value.tagId).pipe(
                map(data => fromTagActions.removeTagSuccess({data})),
                catchError(err => of(fromTagActions.removeTagError({error: err}))),
            )),
        ),
    );
    /*修改*/
    modifyTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.modifyTag),
            mergeMap((action => this.tagStorageService.modifyItem(action.uniKey, action.key, action.value).pipe(
                map(value => fromTagActions.modifyTagSuccess({data: value})),
                catchError(err => of(fromTagActions.modifyTagError({error: err}))),
            ))),
        ),
    );


    /*加载*/
    loadTags$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.loadTags),
            mergeMap(() => this.tagStorageService.getItems()
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

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TagStorageService} from "@storage/tag-storage.service";
import {from, of} from "rxjs";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import * as fromAppActions from "../action";
import * as fromTagActions from "./tag.actions";

@Injectable()
export class TagEffects {
    /*增加*/
    addTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.addingTag),
            mergeMap((action) => this.tagStorageService.addItem(action.data).pipe(
                switchMap(value => [
                    fromTagActions.addTagSuccess({data: value}),
                    fromAppActions.showSuccessToast({message: "添加成功!"}),
                ]),
                catchError(err => from([
                    fromTagActions.addTagError({error: err}),
                    fromAppActions.showErrorToast({errMsg: "添加标签失败！"}),
                ])),
            )),
        ),
    );
    /*删除*/
    removeTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.removeTag),
            mergeMap((value) => this.tagStorageService.removeItem(value.tagId).pipe(
                switchMap(data => [
                    fromTagActions.removeTagSuccess({data}),
                    fromAppActions.showSuccessToast({message: "标签删除成功！"}),
                ]),
                catchError(err => from([
                    fromTagActions.removeTagError({error: err}),
                    fromAppActions.showErrorToast({errMsg: "删除标签失败！"}),
                ])),
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

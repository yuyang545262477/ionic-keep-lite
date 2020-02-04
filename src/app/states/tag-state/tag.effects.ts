import {Injectable} from "@angular/core";
import {ITag} from "@models/tap.model";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {TagStoreSelectors, TagStoreState} from "@redux/tag-state/index";
import {selectAllMTags} from "@redux/tag-state/tag.selectors";
import {TagStorageService} from "@storage/tag-storage.service";
import {from, of} from "rxjs";
import {catchError, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";
import * as fromAppActions from "../action";
import * as fromTagActions from "./tag.actions";
import * as fromTagLogic from "./tag.logic";

@Injectable()
export class TagEffects {
    /*增加*/
    addTag$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTagActions.addingTag),
            map((action): ITag => fromTagLogic.createTagLogic(action.name)),
            mergeMap((tagItem: ITag) => this.tagStorageService.addItem(tagItem).pipe(
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
            withLatestFrom(this.tagStore.pipe(select(selectAllMTags))),
            map(([action, tags]): ITag[] => fromTagLogic.removeByUniKey(action.tagId, tags)),
            mergeMap((tags: ITag[]) => this.tagStorageService.setItems(tags).pipe(
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
    // modifyTag$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromTagActions.modifyTag),
    //         mergeMap((action => this.tagStorageService.modifyItem(action.uniKey, action.key, action.value).pipe(
    //             map(value => fromTagActions.modifyTagSuccess({data: value})),
    //             catchError((error) => of(fromTagActions.modifyTagError({error}))),
    //         ))),
    //     ),
    // );


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


    /*修改编辑状态*/
    updateTagEdit$$ = createEffect(
        () => this.actions$.pipe(
            //监听的action
            ofType(fromTagActions.updateTagEdit),
            //获取feature状态
            withLatestFrom(this.tagStore.pipe(select(TagStoreSelectors.selectAllMTags))),
            //logic 执行函数
            map(([action, tags]) => fromTagLogic.updateTagEditByUniKey(action.disStatus, action.uniKey, tags)),
            //effect具体的method
            mergeMap((action: ITag[]) => this.tagStorageService.setItems(action).pipe(
                // effect 成功函数
                map((data) => fromTagActions.updateTagEditSuccess({data})),
                // effect 失败逻辑
                catchError((error) => of(fromTagActions.updateTagEditError({error}))),
                ),
            )),
    );

    /*修改标签名称*/
    updateTagName$$ = createEffect(
        () => this.actions$.pipe(
            //监听的action
            ofType(fromTagActions.updateTagName),
            //获取feature状态
            withLatestFrom(this.tagStore.pipe(select(selectAllMTags))),
            //logic 执行函数
            map(([action, tags]) => fromTagLogic.updateTagNameByUniKey(tags, action.uniKey, action.tagName)),
            //effect具体的method
            mergeMap((action) => this.tagStorageService.setItems(action).pipe(
                //effect 成功函数
                switchMap((data) => [
                    fromTagActions.updateTagNameSuccess({data}),
                    //others success...
                    fromAppActions.showSuccessToast({message: "标签名称修改成功"}),
                ]),
                // effect 失败逻辑
                catchError((error) => from([
                    fromTagActions.updateTagNameError({error}),
                    //others error...
                    fromAppActions.showErrorToast({errMsg: "标签名称修改失败！"}),
                ])),
                ),
            )),
    );

    constructor(private actions$: Actions,
                private tagStore: Store<TagStoreState.State>,
                private tagStorageService: TagStorageService) {
    }


}

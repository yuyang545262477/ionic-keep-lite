import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {RootStoreAction} from "@redux/index";
import {ListStorageService} from "@storage/list-storage.service";
import {from, of} from "rxjs";
import {catchError, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {ListModalComponent} from "../../modals/list-modal/list-modal.component";
import {MyModalService} from "../../modals/services/my-modal.service";
import * as fromListAction from "./list.actions";
import * as fromListLogic from "./list.logic";
import * as fromListSelector from "./list.selectors";
import * as fromListState from "./list.state";

@Injectable()
export class ListEffects {
    /*添加列表*/
    addList$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromListAction.addList),
            withLatestFrom(this.listStore.pipe(select(fromListSelector.selectAllList))),
            map(([, list]) => fromListLogic.addList(list)),
            switchMap(({latestList, oldList}) => [
                fromListAction.addListSuccess({list: latestList}),
                fromListAction.storageList({list: latestList, oldList}),
            ]),
            catchError((err) => of(fromListAction.addListError({error: err}))),
        ),
    );

    /*列表存储*/
    storageList$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromListAction.storageList),
            mergeMap((action) => this.listStorage.setItems(action.list).pipe(
                switchMap((data) => [
                    fromListAction.storageListSuccess({list: data})],
                ),
                catchError((err) => from([
                        fromListAction.storageListError({oldList: action.oldList, error: err}),
                        RootStoreAction.showErrorToast({errMsg: "列表存储错误"}),
                    ]),
                ),
                ),
            )));

    /*打开选中弹窗*/
    openListModal$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(fromListAction.openChosenModal),
                tap(() => this.myModalService.present(ListModalComponent)),
            );
        },
        {
            dispatch: false,
        },
    );

    /*关闭选中弹窗*/
    closeListModal$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(fromListAction.closeListModal),
                tap(() => this.myModalService.dismiss()),
            );
        },
        {
            dispatch: false,
        },
    );


    constructor(private actions$: Actions,
                private listStore: Store<fromListState.State>,
                private myModalService: MyModalService,
                private listStorage: ListStorageService) {
    }

}

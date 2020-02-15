import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TagStoreAction} from "@redux/tag-state";
import {ToastService} from "@services/toast.service";
import {from, of} from "rxjs";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {MyModalService} from "../modals/services/my-modal.service";
import {TagModalComponent} from "../modals/tag-modal/tag-modal.component";
import * as fromAppActions from "./action";

@Injectable()
export class AppEffects {

    /*显示toast*/
    successToast$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.showSuccessToast),
            tap((action) => this.toastService.showSuccessToast(action.message)),
        ),
        {
            dispatch: false,
        },
    );
    /*显示错误的Toast*/
    errorToast$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.showErrorToast),
            tap((action) => this.toastService.showErrorToast(action.errMsg)),
        ),
        {
            dispatch: false,
        },
    );
    /*打开标签弹窗*/
    openTagModal$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.openTagModal),
            tap(() => this.myModalService.present(TagModalComponent)),
        ),
        {
            dispatch: false,
        },
    );

    /*关闭标签弹窗*/
    closeTagModal$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.closeTagModal),
            tap(() => this.myModalService.dismiss()),
        ),
        {
            dispatch: false,
        },
    );

    /*进入列表详情*/
    goKeepList$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.goListPage),
            mergeMap((action) => from(this.router.navigate(["./list"])).pipe(
                switchMap(() => [
                    TagStoreAction.updateChosenTagId({tagId: action.tagId || ""}),
                    fromAppActions.closeSideMenu(),
                ]),
                catchError(() => from([
                    fromAppActions.showErrorToast({errMsg: "路由切换错误"}),
                ])),
            )),
        ),
    );

    /*关闭sieMenu*/
    closeSideMenu$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.closeSideMenu),
            tap(() => this.menuController.close()),
        ),
        {
            dispatch: false,
        },
    );
    /*首页路由跳转*/
    goHomePage$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAppActions.goHomePage),
            mergeMap(() => from(this.router.navigate(["/home"])).pipe(
                map(() => fromAppActions.closeSideMenu()),
                catchError(() => of(fromAppActions.showErrorToast({errMsg: "路由切换错误！"}))),
            )),
        ),
    );

    constructor(private actions$: Actions,
                private toastService: ToastService,
                private myModalService: MyModalService,
                private menuController: MenuController,
                private router: Router) {
    }
}

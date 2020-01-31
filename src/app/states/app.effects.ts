import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastService} from "@services/toast.service";
import {tap} from "rxjs/operators";
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

    constructor(private actions$: Actions, private toastService: ToastService) {
    }
}

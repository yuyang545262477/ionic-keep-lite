import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ListStateModule} from "@redux/list-state/list-state.module";
import {environment} from "../../environments/environment";
import {metaReducers, reducers} from "../reducers";
import {AppEffects} from "./app.effects";
import {TagStateModule} from "./tag-state/tag-state.module";


@NgModule({
    imports: [
        TagStateModule,
        ListStateModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ],
    exports: [],
    providers: [],
})
export class RootStateModule {

}

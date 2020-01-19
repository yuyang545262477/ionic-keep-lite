import {NgModule} from "@angular/core";
import {TagStateModule} from "./tag-state/tag-state.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../reducers";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";


@NgModule({
    imports: [
        TagStateModule,
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

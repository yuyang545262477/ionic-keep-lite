import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {ListEffects} from "./list.effects";
import * as fromListReducer from "./list.reducer";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromListReducer.listFeatureKey, fromListReducer.reducer),
        EffectsModule.forFeature([ListEffects]),
    ],
})
export class ListStateModule {
}

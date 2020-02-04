import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {ListEffects} from "./list.effects";
import * as fromList from "./list.reducer";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromList.listFeatureKey, fromList.reducer),
        EffectsModule.forFeature([ListEffects]),
    ],
})
export class ListStateModule {
}

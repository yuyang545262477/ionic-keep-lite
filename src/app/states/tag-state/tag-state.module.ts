import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import * as fromTag from "./tag.reducer";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromTag.tagFeatureKey, fromTag.reducer),
    ],
})
export class TagStateModule {
}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import * as fromTag from "./tag.reducer";
import { EffectsModule } from '@ngrx/effects';
import { TagEffects } from './tag.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromTag.tagFeatureKey, fromTag.reducer),
        EffectsModule.forFeature([TagEffects]),
    ],
})
export class TagStateModule {
}

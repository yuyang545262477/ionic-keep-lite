import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {TagEffects} from './tag.effects';
import * as fromTag from './tag.reducer';

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

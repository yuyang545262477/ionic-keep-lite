import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {userFeatureKey} from './user.featureKey';
import {userReducer} from './user.reducer';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(userFeatureKey, userReducer),
    ],
})
export class UserStateModule {
}

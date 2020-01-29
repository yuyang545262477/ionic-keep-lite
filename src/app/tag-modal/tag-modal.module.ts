import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {TagModalComponent} from './tag-modal/tag-modal.component';

@NgModule({
    declarations: [TagModalComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [TagModalComponent],
})
export class TagModalModule {
}

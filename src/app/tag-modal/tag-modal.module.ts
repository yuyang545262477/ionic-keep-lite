import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {TagModalComponent} from './tag-modal/tag-modal.component';
import { CreateTagComponent } from './tag-modal/components/create-tag/create-tag.component';

@NgModule({
    declarations: [TagModalComponent, CreateTagComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    entryComponents: [TagModalComponent],
    exports: [TagModalComponent],
})
export class TagModalModule {
}

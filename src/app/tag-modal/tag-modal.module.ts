import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CreateTagComponent} from "./tag-modal/components/create-tag/create-tag.component";
import {TagItemComponent} from "./tag-modal/components/tag-item/tag-item.component";
import {TagModalComponent} from "./tag-modal/tag-modal.component";

@NgModule({
    declarations: [TagModalComponent, CreateTagComponent, TagItemComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    entryComponents: [TagModalComponent],
    exports: [TagModalComponent],
})
export class TagModalModule {
}

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {ListModalComponent} from "./list-modal/list-modal.component";
import {CreateTagComponent} from "./tag-modal/components/create-tag/create-tag.component";
import {TagItemComponent} from "./tag-modal/components/tag-item/tag-item.component";
import {TagModalComponent} from "./tag-modal/tag-modal.component";

@NgModule({
    declarations: [TagModalComponent, CreateTagComponent, TagItemComponent, ListModalComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    entryComponents: [TagModalComponent, ListModalComponent],
    exports: [TagModalComponent, ListModalComponent],
})
export class ModalsModule {
}
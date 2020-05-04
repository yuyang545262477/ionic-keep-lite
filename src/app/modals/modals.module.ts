import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {ListModalComponent} from "./list-modal/list-modal.component";
import {CreateTagComponent} from "./tag-modal/components/create-tag/create-tag.component";
import {TagItemComponent} from "./tag-modal/components/tag-item/tag-item.component";
import {TagModalComponent} from "./tag-modal/tag-modal.component";
import { UserModalComponent } from './user-modal/user-modal.component';
import {ShareModule} from "../share/share.module";

@NgModule({
    declarations: [TagModalComponent, CreateTagComponent, TagItemComponent, ListModalComponent, UserModalComponent],
    imports: [
        CommonModule,
        IonicModule,
        ShareModule,
    ],
    entryComponents: [TagModalComponent, ListModalComponent],
    exports: [TagModalComponent, ListModalComponent],
})
export class ModalsModule {
}

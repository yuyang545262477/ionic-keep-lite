import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {AddListComponent} from "./add-list/add-list.component";

import {ListPage} from "./list.page";
import { ListInfoBarComponent } from './components/list-info-bar/list-info-bar.component';
import { ListMenuBarComponent } from './components/list-menu-bar/list-menu-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: "",
                component: ListPage,
            },
        ]),
    ],
    declarations: [ListPage, AddListComponent, ListInfoBarComponent, ListMenuBarComponent],
})
export class ListPageModule {
}

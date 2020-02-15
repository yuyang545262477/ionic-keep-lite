import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {AddListComponent} from "./add-list/add-list.component";

import {ListPage} from "./list.page";

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
    declarations: [ListPage, AddListComponent],
})
export class ListPageModule {
}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DividerLineComponent} from "./components/divider-line/divider-line.component";


@NgModule({
    declarations: [DividerLineComponent],
    imports: [
        CommonModule,
    ],
    exports: [DividerLineComponent],
})
export class ShareModule {
}

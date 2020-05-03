import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DividerLineComponent} from "./components/divider-line/divider-line.component";
import { CheckIconComponent } from './components/check-icon/check-icon.component';
import {IonicModule} from "@ionic/angular";


@NgModule({
    declarations: [DividerLineComponent, CheckIconComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [DividerLineComponent,CheckIconComponent],
})
export class ShareModule {
}

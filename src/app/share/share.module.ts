import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DividerLineComponent} from "./components/divider-line/divider-line.component";
import {CheckIconComponent} from "./components/check-icon/check-icon.component";
import {IonicModule} from "@ionic/angular";
import {NavBackIconComponent} from "./components/nav-back-icon/nav-back-icon.component";
import { PinIconComponent } from './components/pin-icon/pin-icon.component';
import { ArchiveIconComponent } from './components/archive-icon/archive-icon.component';
import { EtcIconComponent } from './components/etc-icon/etc-icon.component';
import { AddIconComponent } from './components/add-icon/add-icon.component';
import { ListUpdateTimeComponent } from './components/list-update-time/list-update-time.component';
import { BaseIcon } from './components/base-icon/base-icon.component';


@NgModule({
    declarations: [DividerLineComponent, CheckIconComponent, NavBackIconComponent, PinIconComponent, ArchiveIconComponent, EtcIconComponent, AddIconComponent, ListUpdateTimeComponent, BaseIcon],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [DividerLineComponent, CheckIconComponent, NavBackIconComponent, PinIconComponent, ArchiveIconComponent, EtcIconComponent, AddIconComponent, ListUpdateTimeComponent],
})
export class ShareModule {
}

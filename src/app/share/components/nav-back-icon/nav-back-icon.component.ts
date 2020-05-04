import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {BaseIcon} from "../base-icon/base-icon.component";

@Component({
    selector: "nav-back-icon",
    template: `
        <ion-button>
            <ion-icon name="chevron-back-outline" slot="icon-only" [style.color]="color"></ion-icon>
        </ion-button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBackIconComponent extends BaseIcon implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}

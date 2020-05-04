import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {BaseIcon} from "../base-icon/base-icon.component";

@Component({
    selector: "etc-icon",
    template: `
        <ion-button>
            <ion-icon name="ellipsis-vertical" slot="icon-only" 
                      [style.color]="color"
                      [style.fontSize]="size"
            ></ion-icon>
        </ion-button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtcIconComponent extends BaseIcon implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}

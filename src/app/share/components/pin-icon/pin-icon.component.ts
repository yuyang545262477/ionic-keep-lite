import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {BaseIcon} from "../base-icon/base-icon.component";

@Component({
    selector: "pin-icon",
    template: `
        <ion-button>
            <ion-icon [style.color]="color"
                      [style.fontSize]="size"
                      name="pin-outline"
                      slot="icon-only"
            ></ion-icon>
        </ion-button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinIconComponent extends BaseIcon implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}

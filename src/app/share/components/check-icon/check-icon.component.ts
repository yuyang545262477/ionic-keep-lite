import {Component, OnInit, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
    selector: "check-icon",
    template: `
        <ion-icon [style.fontSize]="fontSize" name="checkbox-outline"></ion-icon>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent implements OnInit {
    @Input() readonly fontSize: string = "32px";

    constructor() {
    }

    ngOnInit(): void {
    }

}

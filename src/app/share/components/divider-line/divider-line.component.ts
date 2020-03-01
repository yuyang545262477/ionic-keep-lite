import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "divider-line",
    templateUrl: "./divider-line.component.html",
    styleUrls: ["./divider-line.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerLineComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

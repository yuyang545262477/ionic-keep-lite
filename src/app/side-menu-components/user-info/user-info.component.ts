import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "side-user-info",
    templateUrl: "./user-info.component.html",
    styleUrls: ["./user-info.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

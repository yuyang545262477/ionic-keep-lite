import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "app-list-type",
    templateUrl: "./lists-type.component.html",
    styleUrls: ["./lists-type.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsTypeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

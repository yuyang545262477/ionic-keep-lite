import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "app-tag-item",
    templateUrl: "./tag-item.component.html",
    styleUrls: ["./tag-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagItemComponent implements OnInit {
    

    constructor() {
    }

    ngOnInit() {
    }

}

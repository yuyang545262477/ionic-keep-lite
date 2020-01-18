import {Component, OnInit} from "@angular/core";

import {Platform} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RootStoreSelectors, RootStoreState} from "./states";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
    public appPages = [
        {
            title: "Home",
            url: "/home",
            icon: "home",
        },
        {
            title: "List",
            url: "/list",
            icon: "list",
        },
    ];

    private isLoading$: Observable<boolean>;
    private errorInfo$: Observable<string>;

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private store$: Store<RootStoreState.State>,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit(): void {
        this.isLoading$ = this.store$.select(
            RootStoreSelectors.selectAllIsLoading,
        );
        this.errorInfo$ = this.store$.select(
            RootStoreSelectors.selectAllError,
        );
    }


}

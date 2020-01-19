import {Component, OnInit} from "@angular/core";

import {Platform} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RootStoreSelectors, RootStoreState} from "./states";
import {appPages, IMenuItem} from "./menu-list";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
    appPages = appPages;

    private isLoading$: Observable<boolean>;
    private errorInfo$: Observable<string>;

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private store$: Store<RootStoreState.State>,
    ) {
        this.initializeApp();
    }

    TrackByPageUrl = (_: number, item: IMenuItem) => item.url;

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

import {Component, OnInit} from "@angular/core";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

import {Platform} from "@ionic/angular";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {appPages, IMenuItem} from "./menu-list";
import {RootStoreSelectors, RootStoreState} from "./states";

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
                private rootStore: Store<RootStoreState.State>,
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
        this.isLoading$ = this.rootStore.select(
            RootStoreSelectors.selectAllIsLoading,
        );
        this.errorInfo$ = this.rootStore.select(
            RootStoreSelectors.selectAllError,
        );
    }


    dispatchAction(event: () => Action) {
        this.rootStore.dispatch(
            event(),
        );
    }
}

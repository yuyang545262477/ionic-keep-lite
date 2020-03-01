import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {IonicStorageModule} from "@ionic/storage";
import {RootStateModule} from "@redux/root-state.module";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {ModalsModule} from "./modals/modals.module";
import {MenuListComponent} from "./side-menu-components/menu-list/menu-list.component";
import {TagListComponent} from "./side-menu-components/tag-list/tag-list.component";
import {UserInfoComponent} from "./side-menu-components/user-info/user-info.component";
import {ShareModule} from "./share/share.module";

@NgModule({
    declarations: [
        AppComponent,
        UserInfoComponent,
        MenuListComponent,
        TagListComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot({
            dbKey: "ionic-keep-lite",
            driverOrder: ["websql", "sqlite", "localstorage"],
        }),
        RootStateModule,
        ModalsModule,
        ShareModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {IonicStorageModule} from "@ionic/storage";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {ListsTypeComponent} from "./components/lists-type/lists-type.component";
import {PageListComponent} from "./components/page-list/page-list.component";
import {TagListComponent} from "./components/tag-list/tag-list.component";
import {RootStateModule} from "./states/root-state.module";
import {TagModalModule} from "./tag-modal/tag-modal.module";

@NgModule({
    declarations: [AppComponent,
        TagListComponent,
        ListsTypeComponent,
        PageListComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot({
            dbKey: "ionic-keep-lite",
            driverOrder: ["localstorage", "sqlite"],
        }),
        RootStateModule,
        TagModalModule,
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

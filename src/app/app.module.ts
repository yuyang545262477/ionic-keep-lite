import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";

import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {IonicStorageModule} from "@ionic/storage";
import {RootStateModule} from "./states/root-state.module";
import {TagListComponent} from "./components/tag-list/tag-list.component";
import {ListsTypeComponent} from "./components/lists-type/lists-type.component";
import {PageListComponent} from "./components/page-list/page-list.component";

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
        IonicStorageModule.forRoot(),
        RootStateModule,
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

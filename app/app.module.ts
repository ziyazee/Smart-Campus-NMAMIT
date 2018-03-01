import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { PagePage } from '../pages/page/page';
import { TeamsPage } from '../pages/teams/teams';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    PagePage,
    TeamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    PagePage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
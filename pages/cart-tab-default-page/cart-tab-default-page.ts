import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagePage } from '../page/page';
import { LoginPage } from '../login/login';
import { CameraTabDefaultPagePage } from '../camera-tab-default-page/camera-tab-default-page';

@Component({
  selector: 'page-cart-tab-default-page',
  templateUrl: 'cart-tab-default-page.html'
})
export class CartTabDefaultPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToPage(params){
    if (!params) params = {};
    this.navCtrl.push(PagePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCameraTabDefaultPage(params){
    if (!params) params = {};
    this.navCtrl.push(CameraTabDefaultPagePage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public categoryPage = CategoryPage;

  constructor(public navCtrl: NavController) {

  }
  public gotoCategoryPage(){
    this.navCtrl.push(this.categoryPage);
  }

}

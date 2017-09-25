import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { QuizPage } from '../quiz/quiz';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories = [];
  public quizPage = QuizPage;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataProvider: DataProvider) {

              this.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  getCategories(){
    this.dataProvider.getCategories().subscribe((data)=>{
          this.categories = data;
    });
  }

  public gotoQuiz(category){
    this.navCtrl.push(this.quizPage,{
      category: category
    });
  }

}

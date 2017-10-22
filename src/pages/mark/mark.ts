import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html',
})
export class MarkPage {
  public answers= {};  // contains question object
  public questions: any;  // contains question object
  private category; // category name
  private ques_no; // current question

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  private showMark(question_id, answer_id, question: any) {
    // returns the source name based on id
    var msg= "";

    if ( question_id != answer_id) {
      msg= "Response: "+this.getSource(answer_id,question);
    }
    
    return msg;
  }

  private getSource(id, question: any) {
    // returns the source name based on id
    switch (id) {
           case "1":
             return question.source_1;
           case "2":
             return question.source_2;
           case "3":
             return question.source_3;
           case "4":
             return question.source_4;
           case "5":
             return question.source_5;
     }
     return "Unknown";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkPage');
    this.answers = this.navParams.get('answers');
    this.category = this.navParams.get('category');
    this.ques_no = this.navParams.get('ques_no');
    this.questions = this.navParams.get('questions');

  }

}

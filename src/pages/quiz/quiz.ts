import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import 'rxjs/add/operator/map';


/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  private category;

  public questions: any;
  private quizQuestion = {

  "id": "1",
  "created": "2017-08-08",
  "updated": "2017-08-08",
  "category": "sports",
  "subcategory": "hockey",
  "title": "All Time NHL Goal Scorers",
  "question_01": "Wayne Gretzky",
  "question_02": "Gordie Howe",
  "question_03": "Jaromir Jagr",
  "question_04": "Brett Hull",
  "question_05": "Marcel Dionne",
  "answer_01": 894,
  "answer_02": 801,
  "answer_03": 765,
  "answer_04": 741,
  "answer_05": 731,
  "source": "http://www.quanthockey.com/nhl/records/nhl-players-all-time-goals-leaders.html"

  };


  constructor(private navController: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private dragulaService: DragulaService,
              private dataProvider: DataProvider) {

    const bag: any = this.dragulaService.find('my-bag');
    if (bag !== undefined ) this.dragulaService.destroy('my-bag');

    dragulaService.drop.subscribe((value) => {
      let alert = this.alertCtrl.create({
        title: 'Item moved',
        subTitle: 'So much fun!',
        buttons: ['OK']
      });
      alert.present();
     });

    dragulaService.setOptions('my-bag', {
      copy: false,
      moves: function (el, container, handle) {
        return container.id !== 'no-drop';
      },
      revertOnSpill: true
    });

  }

  getQuestions(){
    this.dataProvider.getQuestions().subscribe((data)=>{
          this.questions = data; //.filter(question => question.id === '2')
    },error=>{
      console.log(error);// Error getting the data
    });
  }
  ionViewDidLoad() {
    this.category = this.navParams.get('category').name;
    //this.getQuestions();
    console.log('ionViewDidLoad QuizPage');
  }


}

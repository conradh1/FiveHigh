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
  private ques_no;

  public score

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

    const bag: any = this.dragulaService.find('quiz-bag');
    if (bag !== undefined ) this.dragulaService.destroy('quiz-bag');

    dragulaService.setOptions('quiz-bag', {
      copy: false,
      moves: function (el, container, handle) {
        // find the id to determine if the user can drag or not.
        var id = container.id;
        return id.search(/target_/i);
      },
      accepts: function(el, target, source, sibling) {
        // Two rules to note here:
        // 1) A source cannot be dragged into a source.
        // 2) A target cannot only accept one child target.
        var id = target.id;
        if (id.search(/target_/i) ||
           target.children.length > 2) {
          return false;
        }
        else {
          return true;
        }
      },
      revertOnSpill: true,
      direction: 'vertical'
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value: any) => {
      this.onDrop(value.slice(1));
      const [e,el, target, source]  = value;
      console.log("debug SOURCE"+source.id+" TARGET:"+target.id);
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

  }
  private hasClass(el: any, name: string) {
   return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
 }

 private addClass(el: any, name: string) {
   if (!this.hasClass(el, name)) {
     el.className = el.className ? [el.className, name].join(' ') : name;
   }
 }

 private removeClass(el: any, name: string) {
   if (this.hasClass(el, name)) {
     el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
   }
 }

 private onDrag(args) {
   let [e, el] = args;
   this.removeClass(e, 'ex-moved');
 }

 private onDrop(args) {
   let [e,el, target, source] = args;
   this.addClass(e, 'ex-moved');
 }

 private onOver(args) {
   let [e, el, container] = args;
   this.addClass(el, 'ex-over');
 }

 private onOut(args) {
   let [e, el, container] = args;
   this.removeClass(el, 'ex-over');
 }
  getQuestions(ques_no){
    this.dataProvider.getQuestions().subscribe((data)=>{
          // filter by current question
          this.questions = data.filter(question => question.id === '1');   //filter(question => question.id === "'"+this.ques_no+"'");
    },error=>{
      console.log(error);// Error getting the data
    });
  }
  ionViewDidLoad() {
    this.category = this.navParams.get('category').name;
    this.ques_no = this.navParams.get('ques_no');
    this.getQuestions(this.ques_no);
    console.log('ionViewDidLoad QuizPage');
  }


}

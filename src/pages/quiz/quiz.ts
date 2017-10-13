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
  private moves = 0;

  public results = {
   // -1, 0, or 1  unanswered, incorrect, correct
   "target_01": -1,
   "target_02": -1,
   "target_03": -1,
   "target_04": -1,
   "target_05": -1
  };

  public score

  public questions: any;
  public sources: any;

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
        if (target.children.length > 2) {
          return false;
        }
        else {
          return true;
        }
      },
      revertOnSpill: true,
      direction: 'horizontal'
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value: any) => {
      this.onDrop(value.slice(1));
      const [e,el, target, source]  = value;
      this.moves++;
      var sourceList = source.id.split("_");
      var targetList = target.id.split("_");

      if (sourceList[1] == targetList[1]) {
        this.results[target.id] = 1 // response correct
      }
      else {
        this.results[target.id] = 0; // response incorrect
      }
      console.log("debug SOURCE"+source.id+" TARGET:"+target.id+" moves"+this.moves+"score"+this.results[target.id]);

      let alert = this.alertCtrl.create({
        title: 'Question Complete',
        subTitle: 'FiveHigh',
        buttons: ['OK']
      });
      if ( this.moves == 2 ){
        alert.present();
      }
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

 private randomize_sources(question: any) {

   var tmp = [];
   this.sources = [
      { id: 'source_01', name: question.source_01},
      { id: 'source_02', name: question.source_02},
      { id: 'source_03', name: question.source_03},
      { id: 'source_04', name: question.source_04},
      { id: 'source_05', name: question.source_05}

   ];
   /*#################### TO DO: MAKE RNDOM LOCAL CLASS #####################*/
   /*for (var i = 5 - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        switch (j) {
          case 1:
            this.sources.push( { ['id']: 'source_01', ['name']: question.source_01 });
            break;
          case 2:
            this.sources.push( { ['id']: 'source_02', ['name']: question.source_02 });
            break;
          case 3:
            this.sources.push( { ['id']: 'source_03', ['name']: question.source_03 });
            break;
          case 4:
            this.sources.push( { ['id']: 'source_04', ['name']: question.source_04 });
            break;
          case 5:
            this.sources.push( { ['id']: 'source_05', ['name']: question.source_05 });
            break;
        }
    }*/
 }
  getQuestions(ques_no){
    this.dataProvider.getQuestions().subscribe((data)=>{
          // filter by current question
          //console.log("debug getQuestions"+ques_no);
          this.questions = data.filter((question) => {
            if (question.id == ques_no ) {
              // assign sources to
              this.randomize_sources(question);
              return true;
            }
          });
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

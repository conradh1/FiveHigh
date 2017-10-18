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

  public score

  public questions: any;  // contains question object
  private category; // category name
  private ques_no; // current question
  private moves = 0;  // counts number of drag/drops
  private FIVEHIGH = 5;

  public random = [1,2,3,4,5];  //used to randomly assign sources

  public results = {
   // -1, unanswered > 1 incorrect or correct
   "1": -1,
   "2": -1,
   "3": -1,
   "4": -1,
   "5": -1
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
      /*this.moves++;
      var sourceList = source.id.split("_");
      var targetList = target.id.split("_");

      if (sourceList[1] == targetList[1]) {
        this.results[target.id] = 1 // response correct
      }
      else {
        this.results[target.id] = 0; // response incorrect
      }*/
      this.markOnce(source.id, target.id);

      let alert = this.alertCtrl.create({
        title: this.markAll(),
        subTitle: 'FiveHigh',
        buttons: ['OK']
      });
      if ( this.moves == this.FIVEHIGH ) {
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

private markOnce(source, target) {
  this.moves++; // increment the number of moves

   // split out source/target_0[1-5]
  var sourceList = source.split("_");
  var targetList = target.split("_");

  // mark source with target
  this.results[targetList[1]] = sourceList[1];

  console.log("debug SOURCE"+source+" TARGET:"+target+" moves"+this.moves+"score"+this.results[targetList[1]]);
}

private markAll() {

  var msg = "Results ";

  for (let key in this.results) {
    var value = this.results[key];
    msg +=  key+") "+value+"\n" ;
    if ( key == value ) {
      msg += " correct";
    }
  }
  return msg;
}
 private randomize() {

   // place array in this.random order
   for (var i = this.random.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.random[i];
        this.random[i] = this.random[j];
        this.random[j] = temp;
    }
 }

 private getSource(id, question: any) {
   // returns the source name based on id
   switch (id) {
          case 1:
            return question.source_1;
          case 2:
            return question.source_2;
          case 3:
            return question.source_3;
          case 4:
            return question.source_4;
          case 5:
            return question.source_5;
    }
    return "";

 }
  getQuestions(ques_no){
    this.dataProvider.getQuestions().subscribe((data)=>{
          // filter by current question
          //console.log("debug getQuestions"+ques_no);
          this.questions = data.filter((question) => {
            if (question.id == ques_no ) {
              // assign sources to array
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
    this.randomize();
    console.log('ionViewDidLoad QuizPage');

  }


}

import { Component,OnInit } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { RouterModule,ActivatedRoute } from '@angular/router';
import questions from './../../../../public/data/questions.json';
import { Results } from '../../../services/question';

@Component({
  selector: 'app-quizz-page',
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './quizz-page.component.html',
  styleUrl: './quizz-page.component.css',
  standalone:true
})
export class QuizzPageComponent implements OnInit {

  quizz_id:number=0;

  showResult:boolean=false;
  showQuizz:boolean=true;

  result:string='default';
  resultType:Results={
    "A":"",
    "B":""
  }
  questionIndex:number=0;
  numOfQuestions:number=0;
  questionOrder:number=0;
  content:string='';
  options:any;
  answers:string[]=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_aux1=this.route.snapshot.paramMap.get('id');
    if(id_aux1!=null){
      this.quizz_id= parseInt(id_aux1);
    }

    if(questions[this.quizz_id]){
      this.questionOrder=questions[this.quizz_id].questions[this.questionIndex].id;
      this.content=questions[this.quizz_id].questions[this.questionIndex].question;
      this.numOfQuestions=questions[this.quizz_id].questions.length;
      this.options=questions[this.quizz_id].questions[this.questionIndex].options;
    }
  }

  async nextQuestion(respose:string){
    this.answers.push(respose);
    this.questionIndex++;

    if(this.questionIndex < this.numOfQuestions){
      this.questionOrder=questions[this.quizz_id].questions[this.questionIndex].id;
      this.content=questions[this.quizz_id].questions[this.questionIndex].question;
      this.options=questions[this.quizz_id].questions[this.questionIndex].options;
    }else{
      const finalAnswer:string = await this.calculateResult(this.answers);
      this.showQuizz=false;
      this.showResult=true;
      this.resultType=questions[this.quizz_id].results;
      this.result=this.resultType[finalAnswer];
    }
  }

  async calculateResult(anwsers:string[]){
    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length){
          return previous;
        }else{
          return current;
        }
    })

    return result;
  }

}

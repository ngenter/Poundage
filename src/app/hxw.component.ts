import { Component } from '@angular/core';

@Component({
    selector: 'hxw',
    templateUrl: './hxw.component.html'
})

export class HxwComponent {

    knownFootage: number;
    knownPoundage: number;
    questionFootage: number;
    questionPoundage: number;
    answer: number = null;

    showAnswer: boolean = false;
    
    calculate(){
        if (this.questionFootage == null)
            {
            this.answer = (this.knownFootage / this.knownPoundage * this.questionPoundage)
            console.log(this.answer)
            this.showAnswer = !this.showAnswer
        }
        
        else {
            this.answer = (this.knownPoundage / this.knownFootage * this.questionFootage)
            console.log(this.answer)
            this.showAnswer = !this.showAnswer
        }

    }


    clearFootage(){
        this.questionFootage = null;
    }

    clearPoundage(){
        this.questionPoundage = null;
    }

    
}
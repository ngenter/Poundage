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
    rollIs: string = null;
    
    showAnswer: boolean = false;
    showHelp: boolean = false;
    
    calculate(){
        if (this.questionFootage == null)
            {
            this.answer = (this.knownFootage / this.knownPoundage * this.questionPoundage)
            console.log(this.answer)
            this.showAnswer = !this.showAnswer
            this.rollIs = "feet"
        }
        
        else {
            this.answer = (this.knownPoundage / this.knownFootage * this.questionFootage)
            console.log(this.answer)
            this.showAnswer = !this.showAnswer
            this.rollIs = "pounds"
        }

    }


    clearFootage(){
        this.questionFootage = null;
    }

    clearPoundage(){
        this.questionPoundage = null;
    }

    clearAll(){
        this.knownFootage = null;
        this.knownPoundage = null;
        this.questionFootage = null;
        this.questionPoundage = null;
        this.answer = null;
        this.showAnswer = false;
        this.showHelp = false;
    }

    help(){
        this.showHelp = true;
    }

    
}
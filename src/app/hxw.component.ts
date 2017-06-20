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

    // 2000 / 100 * 50

   /* calculate(){
        if (this.questionFootage == null)
            {
            this.answer = (this.knownFootage / this.knownPoundage * this.questionPoundage)
            console.log(this.answer)
            console.log("some shit")
            }

    }
*/

    clear(){

    }

    temp(){
               
        console.log(this.knownFootage)
        //console.log(this.knownFootage*1)
        //var total = (this.knownFootage * this.knownPoundage)
        //console.log(total)
    }
}
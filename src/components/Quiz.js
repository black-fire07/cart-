import React, {Component} from "react";
import questions from "../questions.json";
import isEmpty from "../utils/is-empty";

class Quiz extends Component{
    state = {
        qusetions: [],
        currentquestion: {},
        nextquestion: {},
        prevquestion: {},
        index: 0,
        answer: '',
        noofques: 0,
        noofansques: 0,
        score : 0,
        correct: 0,
        wrong: 0

    };

    displayquestion = (questions=this.state.qusetions, currentquestion, nextquestion, prevquestion) => {
        let {index} =this.state;
        if(!isEmpty(this.state.qusetions)){
            questions=this.state.qusetions;
            currentquestion=questions[index];
            nextquestion=questions[index +1];
            prevquestion=questions[index -1];
           
            this.setState({
                currentquestion,
                prevquestion,
                nextquestion,
               
            });
        }
    } 
   componentDidMount = () => {
       this.displayquestion(this.state.qusetions,this.state.currentquestion,this.state.prevquestion,this.state.nextquestion)
   }

    render(){
        console.log(questions)
        return(
            <div>
                <h3>{this.state.currentquestion.question}</h3>
                <div>
                    <p>grgrg</p>
                    <p>grgrg</p>
                    <p>grgrg</p>
                    <p>grgrg</p>
                </div>
            </div>
        )
    }
}

export default Quiz;
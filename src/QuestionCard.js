import AnswerCard from './AnswerCard'; 
import  {useState} from 'react';
const QuestionCard = (
    {
        quize,
        currentAnswer,
        querentQuestionIndex,
        quizzes,
        navigateNext,
        pickAnswer,
        correctAnswer,
        pickedAnswer
        
    }) => 
{
    return(
        <div className="question-card">
            <h3 className='quize-app-head'>Awesome Quize Application</h3>
            <p className='quize-range'> Question : {querentQuestionIndex + 1} / {quizzes.length}</p>
            <hr/>
            <h3 className='quize-app-question'>{querentQuestionIndex + 1}. {quize.question}</h3>
            {currentAnswer.map((answer,i) => 
            {
              return <AnswerCard 
                key={i}  
                answer={answer} 
                pickAnswer={pickAnswer}
                correctAnswer={correctAnswer}
                pickedAnswer={pickedAnswer}
               />
            })}
            <hr />
            <button onClick={navigateNext}>Next</button>
        </div>
    )
}

export default QuestionCard;
import { useState } from "react";
import { Col, Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';

function Question({q, points}) {
   console.log('q: ', q);
   const { id, /*category, */ question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = q; 
   const answers = [...incorrectAnswers, ...correctAnswer];
   
   answers.concat(incorrectAnswers).concat(correctAnswer);
 
   const [selectedAnswer, setSelectedAnswer] = useState(null);
   const [guessedItRight, setGuessedItRight] = useState(false);
 console.log('selectedAnswer: ', selectedAnswer);  // expexted output: null
   const handleChange = (e) => {
      setSelectedAnswer(e.target.value)
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      setGuessedItRight(selectedAnswer !== correctAnswer ? false : true);
      if(guessedItRight) {
         points += 10;
         return (
            <Alert color='success' role='alert' fade>
               <h4 className="alert-heading">
                  Correct!
               </h4>
               <hr />
               <p className='h3 success success-pts'>+10 pts</p>
               <p className='mb-0'>You got it. Good job. </p>
               <Link to={`${id === 10 ? "ResultsPage" : id + 1}`}>Next Question</Link>
            </Alert>
         );
      } else {
         return (
            <Alert color='danger' role='alert' fade>
               <h4 className="alert-heading">
                  Incorrect
               </h4>
               <hr />
               <p className='h3 danger'>+0 pts</p>
               <p className='mb-0'>You got it... incorrect. It's ok. Next round,  😎 you got this! </p>
            </Alert>
         )
      }
   };
 
   return (
      <>
         <Form onSubmit={handleSubmit}>
         <FormGroup tag="fieldset" >
            <legend>
               {question}
            </legend>
            {answers.map((a, idx) => (
               <Col className='col-sm-6' key={`q${id}a${idx}`}>
                  <FormGroup
                     check
                  >
                     <Input
                        id={`q${id}a${idx}r${idx}`}
                        name="answer"
                        type="radio"
                        value={a}
                        checked={selectedAnswer === a}
                        onChange={handleChange}
                     />
                     {' '}
                     <Label htmlFor={`q${id}a${idx}r${idx}`} check >
                        {a}
                     </Label>
                  </FormGroup>
               </Col>
            ))}
         </FormGroup>
            {selectedAnswer === null ? < Button disabled type="submit"> Finalize Answer </Button> : < Button style={{backgroundColor:'fuchsia', color: 'white'}} type="submit"> Finalize Answer </Button>}
         </Form>

      </>
   );
}

export default Question;
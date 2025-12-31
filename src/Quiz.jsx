// import { questions, getQuestionById, aQuestion, displayQuestion } from './app/shared/questions';
const myQuestion = {
      id: 0,
      type: "multiple",
      difficulty: "easy",
      category: "Mythology",
      question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
      correct_answer: "Orpheus",
      incorrect_answers: [
         "Hercules",
         "Perseus",
         "Daedalu",
      ],
      answers: [...incorrect_answers, correct_answer],   
};

export default function Quiz () {
const { question, correct_answer, incorrect_answers } = questions;
   return (
         <FormGroup tag="fieldset">
            <legend>
               {question}
            </legend>
            {answers.map((a, idx) => (
               <FormGroup
                  check
                  key={`q${id}a${idx}`}
               >
                  <Input
                     id={`q${id}a${idx}r${idx}`}
                     name="answer"
                     type="radio"
                     value={a}
                  />
                  {' '}
                  <Label htmlFor={`q${id}a${idx}r${idx}`} check>
                     {a}
                  </Label>
               </FormGroup>
            ))}
         </FormGroup>
   );
}

import { useState } from 'react';
import { getQuestionById } from '../app/shared/questions';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Question from '../Question';

const initialState = {
   round: 0,
   points: 0,
   guessedRight: false,
};

function GamePage() {
   const { round, points, guessedRight } = initialState;
   
   const { id } = useParams();
   console.log('id: ', id);
   const qstn = getQuestionById(id)
   let content = null;

   // if (!qstn) {
   //    console.log("Error: Could not find a question by the provided id: ", id);
   // } else {
   //    content = (
   //       <>
   //          <Question id={qstn} points={points} />
   //       </>
   //    );
   // }
   content = <Question q={qstn} points={points} />



   return (
      <Container>
         <header className='mt-3 py-2'>
            <p>Round {round + 1}</p>
            <p className='h2'>{points} pts.</p>
         </header>
         
         <Row>
            {content}
         </Row>
      </Container>
   );
};

export default GamePage;
import { Container, Row, Col } from "reactstrap";  
import { Link } from "react-router-dom"; 
function StartPage() {
return (
   <Container>
      <header>
         <h1>TRIVIA<span className='text-body-secondary'>THIS</span></h1>
         <p className='h3'>Fast Paced Trivia Game!</p>
         <hr />
      </header>
      <Row>
         <Col>
            <p> For all trivia lovers <br />
               10 rounds
               Multiple Choice
               READY...
            </p>
         <Link to={1}>Start TriviaThis</Link> 
         </Col>
      </Row>
   </Container>
);
};

export default StartPage;
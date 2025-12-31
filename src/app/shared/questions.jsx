
const questions = [
   {
       id: 0,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
       correct_answer: "Orpheus",
       incorrect_answers: [
           "Hercules",
           "Perseus",
           "Daedalus"
       ]
   },
   {
       id: 1,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "How many heads does Cerberus have?",
       correct_answer: "3",
       incorrect_answers: [
           "2",
           "1",
           "5"
       ]
   },
   {   id: 2,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "Who was the only god from Greece who did not get a name change in Rome?",
       correct_answer: "Apollo",
       incorrect_answers: [
           "Demeter",
           "Zeus",
           "Athena"
       ]
   },
   {   id: 3,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "Who was the King of Gods in Ancient Greek mythology?",
       correct_answer: "Zeus",
       incorrect_answers: [
           "Apollo",
           "Hermes",
           "Poseidon"
       ]
   },
   {   id: 4,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "Which of these mythological creatures is said to be half-man and half-horse?",
       correct_answer: "Centaur",
       incorrect_answers: [
           "Minotaur",
           "Pegasus",
           "Gorgon"
       ]
   },
   {   id: 5,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "The ancient Roman god of war was commonly known as which of the following?",
       correct_answer: "Mars",
       incorrect_answers: [
           "Jupiter",
           "Juno",
           "Ares"
        ]
    },
    {   id: 6,
       type: "multiple",
        difficulty: "easy",
       category: "Mythology",
        question: "This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.",
        correct_answer: "Eris",
        incorrect_answers: [
            "Charon",
            "Ceres",
            "Dysnomia"
        ]
    },
   {   id: 7,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "In most traditions, who was the wife of Zeus?",
       correct_answer: "Hera",
       incorrect_answers: [
           "Aphrodite",
           "Athena",
           "Hestia"
       ]
   },
   {   id: 8,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "What mythology did the god &quot;Apollo&quot; come from?",
       correct_answer: "Greek and Roman",
       incorrect_answers: [
           "Roman and Spanish",
           "Greek and Chinese",
           "Greek, Roman and Norse"
       ]
   },
   {   id: 9,
       type: "multiple",
       difficulty: "easy",
       category: "Mythology",
       question: "The greek god Poseidon was the god of what?",
       correct_answer: "The Sea",
       incorrect_answers: [
           "War",
           "Sun",
           "Fire"
       ]
   }
];
let round = 0;
export const selectAllQuestions = () => {
    console.log('questions: ', questions);
    return questions;
}

export const getQuestionById = (id) => {
    return questions.find((question) => question.id === parseInt(id)); 
}

export let aQuestion = getQuestionById(round);

// to pause the game, (if I use a loop) just add in a boolean  named something like isPaused and set it to true. The loops condition should check for the expression comparison or the isPaused boolean and ensure it is set to false in ordeer to continue
 

// export const Round = (currRound) => {
//     let round = currRound;
//     return (
//         <div>
//             <p>{round}</p>
//         </div>
//     );
// }



{/*
//     console.log('question: ', question);
//     return question;
//     // question.possibleAnswers = [...QUESTIONS.incorrect_answers]
// });
// let dq = displayQuestion;
// console.log('dq: ', dq);

// export const Shuffle = () => {
//     for (let i = QUESTIONS.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [QUESTIONS[i], QUESTIONS[j]] = [QUESTIONS[j], QUESTIONS[i]];
//     }
//     return QUESTIONS;
// }
// 
*/}
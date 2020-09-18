import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

 {/*Routing funtion for pages 
using exact key word will only render that particular comp*/}
function App() {
  return (
 
    <Router>
         <Route path="/" exact component ={Home}/>
         <Route path="/play/instructions" exact component ={QuizInstructions}/>
         <Route path="/play/quiz" exact component ={Play}/>
         <Route path="/play/quizsummary" exact component ={QuizSummary}/>
    </Router>
   
   
  );
}

export default App;

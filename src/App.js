import { Routes, Route } from 'react-router-dom'
import './App.css';

import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StartPage />} />
          <Route path='/:id' element={<GamePage />} />
      </Routes>
    </div>
  );
}
///}

export default App;

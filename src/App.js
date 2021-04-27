import './index.css';
import './App.css';
import TopScore from './TopScore';
import HandContainer from './HandContainer';
import CompContainer from './CompContainer';
import { useState } from 'react';
import { setPlayer1, setPlayer2, setScreen } from './gameSlice';
import { useSelector, useDispatch } from 'react-redux';
import Referee from './Referee';
import Replay from './Replay';

function App() {
  const screen = useSelector((state) => state.game.screen);
  // const [display1, setDisplay1] = useState(true);
  // const [display2, setDisplay2] = useState(true);

  return (
    <div className='App'>
      <TopScore />
      <CompContainer />
      <HandContainer />
      <Referee />
      <Replay />
    </div>
  );
}

export default App;

// {(screen == "competition") ? <Hand shape='rock' onHandClick={onHandClick}/>: null} />

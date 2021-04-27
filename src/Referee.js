import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { increment, decrement } from './gameSlice';

const Referee = () => {
  const compHand = useSelector((state) => state.game.player2);
  const userHand = useSelector((state) => state.game.player1);
  const score = useSelector((state) => state.game.score);
  console.log('HANDS', userHand, compHand);

  const dispatch = useDispatch();

  const [winner1, setWinner1] = useState('');
  const [counter, setCounter] = useState(0);
  const [outcome, setOutcome] = useState('?');

  useEffect(() => {
    if ((userHand == 'scissors') & (compHand == 'paper')) {
      setOutcome('YOU WIN');
      dispatch(increment());
      console.log(outcome, counter);
    }
    if ((userHand == 'paper') & (compHand == 'rock')) {
      setOutcome('YOU WIN');
      dispatch(increment());;
    }
    if ((userHand == 'rock') & (compHand == 'scissors')) {
      setOutcome('YOU WIN');
      dispatch(increment());;
    }
    if (userHand === compHand) {
      setOutcome('DRAW');
      
    }

    if ((compHand == 'scissors') & (userHand == 'paper')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
    if ((compHand == 'paper') & (userHand == 'rock')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
    if ((compHand == 'rock') & (userHand == 'scissors')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
  }, [compHand]);

  //   dispatch(setScore(counter));

  return (
    <div className='referee'>
      <h1 className='youwin'>{outcome}</h1>
      <button className='playagain'>PLAY AGAIN</button>
      <button className='rules'>RULES</button>
      <div className='counter1'>
        {score}
        {winner1}
      </div>
    </div>
  );
};

export default Referee;

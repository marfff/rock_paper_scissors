import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { increment, decrement } from './gameSlice';

const Referee = () => {
  const compHand = useSelector((state) => state.game.player2);
  const userHand = useSelector((state) => state.game.player1);
  console.log('HANDS', userHand, compHand);

  const dispatch = useDispatch();
  const [outcome, setOutcome] = useState('?');

  useEffect(() => {
    if ((userHand === 'scissors') & (compHand === 'paper')) {
      setOutcome('YOU WIN');
      dispatch(increment());
    }
    if ((userHand === 'paper') & (compHand === 'rock')) {
      setOutcome('YOU WIN');
      dispatch(increment());
    }
    if ((userHand === 'rock') & (compHand === 'scissors')) {
      setOutcome('YOU WIN');
      dispatch(increment());
    }
    if (userHand === compHand) {
      setOutcome('DRAW');
    }

    if ((compHand === 'scissors') & (userHand === 'paper')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
    if ((compHand === 'paper') & (userHand === 'rock')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
    if ((compHand === 'rock') & (userHand === 'scissors')) {
      setOutcome('YOU LOSE');
      dispatch(decrement());
    }
  }, [compHand]);

  return (
    <div className='referee'>
      {compHand && <h1 className='youwin'>{outcome}</h1>}

    </div>
  );
};

export default Referee;

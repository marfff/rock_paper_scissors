import Hand from './components/Hand';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer1, setPlayer2 } from './gameSlice';
import { setScreen } from './navigationSlice';
import { useState } from 'react';

function HandContainer(props) {
  const screen = useSelector((state) => state.navigation.screen);

  const dispatch = useDispatch();

  // const [display, setDisplay] = useState(true);
  // console.log('display', display);

  const onHandClick = (newShape) => {
    dispatch(setPlayer1(newShape));
    dispatch(setPlayer2());
    dispatch(setScreen('competition'));
    // dispatch(setScreen("start"))

    // Dispatch screen change
  };

  if (screen !== 'start') return null;

  return (
    <div className='hands'>
      <div className='handstriangle'>
        <img src='/images/bg-triangle.svg' alt='triangle' />
      </div>
      <div className='handstop'>
        <Hand shape='paper' onHandClick={onHandClick} />
        <Hand shape='scissors' onHandClick={onHandClick} />
      </div>
      <div className='handsbottom'>
        <Hand shape='rock' onHandClick={onHandClick} />
      </div>
    </div>
  );
}

export default HandContainer;
/* <div className disk1>
        <div className='disk1'>
          <Hand shape='paper' onHandClick={onHandClick} />
        </div>

        <div className='disk2'>
          <Hand shape='rock' onHandClick={onHandClick} />
        </div>

        <div className='disk3'>
          <Hand shape='scissors' onHandClick={onHandClick} />
        </div> */

/* Contest screen
        <div className='player1'>
          <div className='disk1'>
            <Hand shape={player1} onHandClick={() => null} />
          </div>
        </div>

        <div className='player2'>
          <div className='disk1'>
            <Hand shape={player2} onHandClick={() => null} />
          </div>
        </div>
        {/* Contest screen END */
// </div>
// <div className disk2></div>

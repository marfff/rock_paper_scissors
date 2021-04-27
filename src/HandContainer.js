import Hand from './components/Hand';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer1, setPlayer2 } from './gameSlice';
import { setScreen } from './navigationSlice';

function HandContainer(props) {
  const screen = useSelector((state) => state.navigation.screen);
  const dispatch = useDispatch();
  const onHandClick = (newShape) => {
    dispatch(setPlayer1(newShape));
    setTimeout(() => dispatch(setPlayer2()), 1000);
    dispatch(setScreen('competition'));
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

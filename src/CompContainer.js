import Hand from './components/Hand';
import { useSelector, useDispatch } from 'react-redux';

function CompContainer(props) {
  const player1 = useSelector((state) => state.game.player1);
  const player2 = useSelector((state) => state.game.player2);
  const screen = useSelector((state) => state.navigation.screen);

  if (screen !== 'competition') return null;

  return (
    <div className='competition'>
      <div className='player1'>
        <div className='handstriangle'>
          <Hand shape={player1} onHandClick={() => null} />
        </div>
      </div>
      <div className='player2'>
        <div className='handstriangle'>
          <Hand shape={player2} onHandClick={() => null} />
        </div>
      </div>
    </div>
  );
}

export default CompContainer;

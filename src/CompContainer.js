import Hand from './components/Hand';
import { useSelector } from 'react-redux';
import oval from './images/Oval Copy 2.png';

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
          <h4 className='youpicked'>YOU PICKED</h4>
        </div>
      </div>
      <div className='player2'>
        <div className='handstriangle'>
          {player2 ? (
            <Hand shape={player2} onHandClick={() => null} />
          ) : (
            <img className='ovaly' src={oval} alt='blank' />
          )}
          <h4 className='housepicked'>THE HOUSE PICKED</h4>
        </div>
      </div>
    </div>
  );
}

export default CompContainer;

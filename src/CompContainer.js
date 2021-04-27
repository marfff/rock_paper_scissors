import Hand from './components/Hand';
import { useSelector, useDispatch } from 'react-redux';
import oval from './images/Oval Copy 2.png';

function CompContainer(props) {
  const player1 = useSelector((state) => state.game.player1);
  const player2 = useSelector((state) => state.game.player2);
  const screen = useSelector((state) => state.navigation.screen);

  if (screen !== 'competition') return null;
  // setTimeout(() => dispatchEvent(setComputerHand(dpHand), 500);

  return (
    <div className='competition'>
      {/* <div className='p1'> */}
      <div className='player1'>
        <div className='handstriangle'>
          <Hand shape={player1} onHandClick={() => null} />
          <h4 className='youpicked'>YOU PICKED</h4>
        </div>
        {/* <h4 className='youpicked'>YOU PICKED</h4> */}
      </div>

      {/* </div> */}
      {/* <div className='p2'> */}
      <div className='player2'>
        <div className='handstriangle'>
          {player2 ? (
            <Hand shape={player2} onHandClick={() => null} />
          ) : (
              <img className='ovaly' src={oval} />
              
          )}
          <h4 className='housepicked'>THE HOUSE PICKED</h4>
          {/* <img src={ oval}/> */}
          {/* <img className='ovaly' src={oval} /> */}
        </div>
        {/* </div> */}
        {/* <h4 className='housepicked'>THE HOUSE PICKED</h4> */}
      </div>
    </div>
  );
}

export default CompContainer;

// setTimeout(() => dispatch(setComputerHAnd(cpHand)), 500)

// function ovalimage() {
//   return(<img src={oval} />)
// }
//   export default ovalimage;

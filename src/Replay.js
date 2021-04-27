import { setScreen } from './navigationSlice';
import { useSelector, useDispatch } from 'react-redux';
import rules2 from './images/image-rules.svg';
import { useState } from 'react';

const Instructions = () => {
  const [showImage, setShowImage] = useState(null);
  const toggleImage = () => setShowImage(!showImage);
  return (
    <>
      {showImage && (
        <div className='rules1'>
          <div className='rulestitle'>RULES</div>

          <div className='handstriangle'>
            <img className='rulesimage' src={rules2} alt='triangle' />
          </div>
          <div className='crossrules' onClick={toggleImage}>
            X
          </div>
        </div>
      )}
      <button className='rules' onClick={toggleImage}>
        RULES
      </button>
    </>
  );
};

const Replay = () => {
  const compHand = useSelector((state) => state.game.player2);
  const dispatch = useDispatch();

  return (
    <div>
      {compHand && (
        <button
          className='playagain'
          onClick={() => dispatch(setScreen('start'))}>
          PLAY AGAIN
        </button>
      )}

      {true && <Instructions />}
    </div>
  );
};

export default Replay;

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
          <div className='crossrules' onClick={toggleImage}>X</div>
        </div>
      )}
      <button className='rules' onClick={toggleImage}>
        RULES
      </button>
    </>
  );
};

const Replay = () => {
  const screen = useSelector((state) => state.navigation.screen);
  const compHand = useSelector((state) => state.game.player2);
  const dispatch = useDispatch();
  // const onHandlePlayClick = (event) => {
  //     event.preventDefault();
  //     // console.log("clickedevent",event)
  //     onHandlePlayClick();
  //     // dispatch(setScreen('start'));
  //   };

  // const onHandlePlayClick = () => {
  //     // dispatch(setPlayer1(newShape));
  //     // setTimeout(() => dispatch(setPlayer2()), 1000);
  //     dispatch(setScreen('start'));
  //   };
  return (
    <div>
      {compHand && (
        <button
          className='playagain'
          onClick={() => dispatch(setScreen('start'))}>
          PLAY AGAIN
        </button>
      )}
      {/* {compHand && <h1 className='youwin'>{outcome}</h1>} */}
      {/* // <button className='rules' onClick={() =>
                {console.log("pressed2")}>RULES</button> */}

      {true && <Instructions />}
    </div>
  );
};

export default Replay;

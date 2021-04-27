import { useSelector} from 'react-redux';

function TopScore() {
  const score = useSelector((state) => state.game.score);

  return (
    <div className='scores'>
      <div className='title1'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className='scorebox'>
        <span className='scoretext'>SCORE</span>
        <span className='scorefinal'>{score}</span>
      </div>
    </div>
  );
}

export default TopScore;

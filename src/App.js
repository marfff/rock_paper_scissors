import './index.css';
import './App.css';
import TopScore from './TopScore';
import HandContainer from './HandContainer';
import CompContainer from './CompContainer';
import Referee from './Referee';
import Replay from './Replay';

function App() {
  return (
    <div className='App'>
      <TopScore />
      <CompContainer />
      <HandContainer />
      <Referee />
      <Replay />
    </div>
  );
}

export default App;

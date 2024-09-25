import logo from './logo.svg';
import './App.css';
import Scorecard from './Components/Scorecard';
import BatterList from './Components/BatterList';
import BowlerList from './Components/BowlerList';
import { useEffect, useState } from 'react';
import AppContext from './ContextProvider';
import OperationComponent from './Components/OperationComponent';
import data from './data/data';

function App() {

  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [noOfBalls, setNoOfBalls] = useState(0);
  const [batters, setBatters] = useState(data.batters);
  const [bowlers, setBowlers] = useState(data.bowlers);
  const [currentBatter1, setCurrentBatter1] = useState(batters[0]);
  const [currentBatter2, setCurrentBatter2] = useState(batters[1]);

  return (
    <AppContext.Provider
      value={{
        score, setScore,
        wickets, setWickets,
        noOfBalls, setNoOfBalls,
        batters, setBatters,
        bowlers, setBowlers,
        currentBatter1, setCurrentBatter1,
        currentBatter2, setCurrentBatter2
      }}
    >
      <div className='p-7'>
        <Scorecard>
        </Scorecard>
        <BatterList></BatterList>
        <BowlerList></BowlerList>
        <OperationComponent></OperationComponent>
      </div>
    </AppContext.Provider >
  );

}

export default App;

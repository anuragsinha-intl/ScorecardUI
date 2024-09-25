import { useContext } from "react"
import AppContext from "../ContextProvider"

export default function BattingOperation({ value }) {

    const {
        score, setScore,
        noOfBalls, setNoOfBalls,
        currentBatter1, setCurrentBatter1,
        currentBatter2, setCurrentBatter2,
    } = useContext(AppContext);

    function addBatterScore(batter, setBatterScore) {
        console.log(batter.runs, value)
        setBatterScore(prev => {
            return Object.assign({}, prev, {
                runs: prev.runs + value,
                balls: prev.balls + 1
            })
        })
        console.log(batter)
    }

    function changeStrike() {
        console.log('changing strike')
        setCurrentBatter1(prev => {
            return Object.assign({}, prev, {
                strike: !prev.strike
            })
        })
        setCurrentBatter2(prev => {
            return Object.assign({}, prev, {
                strike: !prev.strike
            })
        })
    }

    function handleScore() {
        console.log(score, value);
        setScore(() => score + value);
        setNoOfBalls(() => noOfBalls + 1);
        if (currentBatter1.strike) {
            addBatterScore(currentBatter1, setCurrentBatter1);
        } else {
            addBatterScore(currentBatter2, setCurrentBatter2)
        }
        if (value % 2 != 0) {
            changeStrike()
        }
    }

    return (
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleScore}
        >
            {value}
        </button>
    )
}
import { useContext } from "react"
import AppContext from "../ContextProvider"

export default function WicketOperation() {

    const {
        wickets, setWickets,
        noOfBalls, setNoOfBalls,
        batters, setBatters,
        currentBatter1, setCurrentBatter1,
        currentBatter2, setCurrentBatter2,
    } = useContext(AppContext);

    function dismissCurrentBatter() {
        if (currentBatter1.strike) {
            console.log('dismissing batter 1')
            setCurrentBatter1(prev => {
                return Object.assign({}, prev, {
                    dismissed: true,
                    active: false,
                    strike: false
                });
            });
        } else {
            console.log('dismissing batter 1')
            setCurrentBatter2(prev => {
                return Object.assign({}, prev, {
                    dismissed: true,
                    active: false,
                    strike: false
                });
            });

        }
    }

    function selectNewBatter() {
        console.log(batters)
        const newBatter = batters.filter(batter => !batter.active && !batter.dismissed)[0]
        newBatter.active = true;
        newBatter.strike = true;
        if (currentBatter1.dismissed) {
            setCurrentBatter1(newBatter)
        } else if (currentBatter2.dismissed) {
            setCurrentBatter2(newBatter);
        } else {
            alert("dismissal not updated")
        }
    }

    function handleWicket() {
        setWickets(() => wickets + 1);
        setNoOfBalls(() => noOfBalls + 1);
        dismissCurrentBatter();
        selectNewBatter();

    }

    return (
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"

            onClick={handleWicket}
        >
            Wicket
        </button>
    )
}
import { useContext } from "react"
import AppContext from "../ContextProvider"


export default function Scorecard() {

    const { score, wickets, noOfBalls } = useContext(AppContext)

    function getOvers() {
        return Math.floor(noOfBalls / 6) + '.' + (noOfBalls % 6)
    }

    return (
        // team name // score // overs
        <div className="scorecard bg-blue-300">
            <div id="teamName" >
                Team 1
            </div>
            <div id="score" className="score">
                <div id="runs">
                    Score: {score}
                </div>
                /
                <div id="wickets">
                    {wickets}
                </div>
            </div>
            <div id="overs">
                Overs: {getOvers()}
            </div>
        </div>
    )
}
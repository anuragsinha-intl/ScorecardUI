import { useContext, useEffect, useState } from "react"
import BatterItem from "./BatterItem"
import AppContext from "../ContextProvider"

export default function BatterList() {

    const {
        currentBatter1, setCurrentBatter1,
        currentBatter2, setCurrenBatter2
    } = useContext(AppContext);

    return (
        // player name // runs // ball // 4's // 6's
        <div className="">
            <table id="batterList" className="m-2 table-fixed w-full">
                <thead>
                    <tr>
                        <th>
                            Batter Name
                        </th>
                        <th>
                            Runs
                        </th>
                        <th>
                            Balls
                        </th>
                        <th>
                            4's
                        </th>
                        <th>
                            6's
                        </th>
                    </tr>
                </thead>
                {/* rows for palyers */}
                <tbody>
                    {[currentBatter1, currentBatter2].map(batter => <BatterItem key={batter.id} batter={batter}></BatterItem>)}
                </tbody>
            </table>
        </div>
    )
}
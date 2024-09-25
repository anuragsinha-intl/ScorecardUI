import BowlerItem from "./BowlerItem"

export default function BowlerList() {

    const bowlers = [
        {
            id: "BOWL1",
            name: 'Bowler 1',
            overs: 4,
            maidens: 0,
            wickets: 1,
            runs: 18,
            econ: 4.5
        },
    ]

    return (
        <table className="m-5 table-fixed w-full">
            <thead>
                <tr>
                    <th>Bowler Name</th>
                    <th>Overs</th>
                    <th>Maiden</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>Economy</th>
                </tr>
            </thead>
            {/* rows for bowlers */}
            <tbody>
                {bowlers.map(bowler => <BowlerItem key={bowler.id} bowler={bowler}></BowlerItem>)}
            </tbody>
        </table>
    )
}
export default function BowlerItem({ bowler }) {
    return (
        <tr>
            <td className="text-center">{bowler.name}</td>
            <td className="text-center">{bowler.overs}</td>
            <td className="text-center">{bowler.maidens}</td>
            <td className="text-center">{bowler.runs}</td>
            <td className="text-center">{bowler.wickets}</td>
            <td className="text-center">{bowler.econ}</td>
        </tr>
    )
}
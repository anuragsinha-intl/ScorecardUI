export default function BatterItem({ batter }) {
    return (
        <tr>
            <td className="text-center">
                {batter.name}{batter.strike ? '*' : ''}
            </td>
            <td className="text-center">
                {batter.runs}
            </td>
            <td className="text-center">
                {batter.balls}
            </td>
            <td className="text-center">
                {batter.fours}
            </td>
            <td className="text-center">
                {batter.sixes}
            </td>
        </tr>
    )
}
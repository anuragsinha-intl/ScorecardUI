import { useContext } from "react"
import AppContext from "../ContextProvider"

export default function ExtrasOperation({ type }) {

    const { score, setScore } = useContext(AppContext)


    function handleExtras() {
        setScore(() => score + 1)
    }

    return (
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleExtras}>{type}</button>
    )
}
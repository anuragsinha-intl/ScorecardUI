import BattingOperation from "./BattingOperations";
import ExtrasOperation from "./ExtrasOperations";
import WicketOperation from "./WicketOperations";

export default function OperationComponent() {
    return (
        <>
            <div className="flex flex-row justify-center space-x-10">
                {/* batting operations */}
                <BattingOperation value={1}></BattingOperation>
                <BattingOperation value={2}></BattingOperation>
                <BattingOperation value={3}></BattingOperation>
                <BattingOperation value={4}></BattingOperation>
                <BattingOperation value={6}></BattingOperation>
            </div>
            <div className="flex flex-row justify-center space-x-10 p-10">
                {/* bowling operations */}
                <WicketOperation></WicketOperation>
            </div>
            <div className="flex flex-row justify-center space-x-10 p-4">
                {/* extras */}
                <ExtrasOperation type="WIDE"></ExtrasOperation>
                <ExtrasOperation type="NO-BALL"></ExtrasOperation>
            </div>
        </>
    )
}
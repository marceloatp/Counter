import { CounterActions } from "./CounterActions";
import { CounterDisplay } from "./CounterDisplay";

export function Counter () {

    return (
        <div className="border rounded shadow-md">
            <div className="p-2 text-center">
                <CounterDisplay />
            </div>
            <CounterActions />
        </div>
    )
}
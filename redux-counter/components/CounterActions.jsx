import { Minus } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

export function CounterActions() {
    return (
        <div>
            <button>
                <Plus weight="bold"/>
            </button>
            <button>
                <Minus weight="bold"/>
            </button>
        </div>
    )
}
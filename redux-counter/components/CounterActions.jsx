import { Minus } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

export function CounterActions() {
    return (
        <div className="flex flex-col">
             <button className="bg-zinc-200 p-4 flex items-center justify-center border-b border-zinc-300 hover:bg-zinc-100 transition-colors">
                    <Plus weight="bold" className="text-zinc-500" />
                </button>
                <button className="bg-zinc-200 p-4 flex items-center justify-center hover:bg-zinc-100 transition-colors">
                    <Minus weight="bold" className="text-zinc-500" />
                </button>
        </div>
    )
}
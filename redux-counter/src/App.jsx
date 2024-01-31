import { Counter } from "../components/Counter"

const App = () => (
  <main className="w-48 m-auto flex-col gap-8">
    <h1 className="font-semibold text-center border-b p-2">Redux Counter</h1>
    
    <Counter />
  </main>
)

export default App 
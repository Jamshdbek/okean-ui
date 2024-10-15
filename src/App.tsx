import { Button } from "./components"

function App() {

  return (
    <>
    <Button onClick={()=>alert('hi')} variant={"outline"}>Hi</Button>
     <h1>Rimo UI</h1>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App

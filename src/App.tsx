import { Button, Input } from "./components";

function App() {
  return (
    <>
      <Button className="text-black border" onClick={() => alert("hi")}>Hi</Button>
      <Input className=" border-inherit border-blue-400" />
      <h1>Okean UI</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;

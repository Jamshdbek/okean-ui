import { Button, Input } from "./components";

function App() {
  return (
    <>
      <h1>Okean UI 🌊</h1>
      <Button className="text-black border" onClick={() => alert("hi")}>
        Hi I'm Button
      </Button>
      <Input placeholder="hi I'm input" className=" border-inherit border-blue-400" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;

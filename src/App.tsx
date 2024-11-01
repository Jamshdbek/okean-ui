import { Button, Input } from "./components";

function App() {
  return (
    <>
      <h1>Okean UI 🌊</h1>
      <Button className="text-black border" onClick={() => alert("hi")}>
        Hi I'm Button
      </Button>
      <Input
        placeholder="hi I'm input"
        className=" border-inherit"
      />
    </>
  );
}

export default App;

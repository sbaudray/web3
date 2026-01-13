import "./App.css";
import { Counter } from "./Counter";
import { FormUsingHook } from "./FormUsingHook";
import { Separator } from "./Separator";
import { SimpleForm } from "./SimpleForm";
import { WindowSizeDisplay } from "./WindowSizeDisplay";

function App() {
  return (
    <div>
      <Counter />

      <Separator />

      <SimpleForm lowPerf={true} />

      <Separator />

      <WindowSizeDisplay />

      <Separator />

      <FormUsingHook />
    </div>
  );
}

export default App;

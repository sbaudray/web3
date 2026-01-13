import "./App.css";
import { UserTable } from "./UserTable";
import { InputWithAutoFocus } from "./InputWithAutoFocus";
import { ResizableDiv } from "./ResizableDiv";
import { Separator } from "./Separator";
import { DivWithTooltipOnHover } from "./DivWithTooltipOnHover";
import { ButtonWithModal } from "./ButtonWithModal";

function App() {
  return (
    <>
      <h2 style={{ fontSize: 24 }}>Modal</h2>
      <ButtonWithModal />

      <Separator />

      <h2 style={{ fontSize: 24 }}>Tooltip</h2>
      <DivWithTooltipOnHover />

      <Separator />

      <h2 style={{ fontSize: 24 }}>Fragment List</h2>
      <UserTable />

      <Separator />

      <h2 style={{ fontSize: 24 }}>Input Focus</h2>
      <InputWithAutoFocus />

      <Separator />

      <h2 style={{ fontSize: 24 }}>Resizable Div</h2>
      <ResizableDiv />
    </>
  );
}

export default App;

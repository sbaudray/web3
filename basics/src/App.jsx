import { useState } from "react";
import "./App.css";
import { PostIndex } from "./PostIndex";

const greetings = "SUPINFO";

function App() {
  const hour = new Date().getHours();

  // if (true) {
  //   return null;
  // }

  return (
    <div>
      Il est {hour} heures, {hour > 17 ? "Bonsoir" : "Bonjour"} {greetings}
      <div>
        Articles:
        <PostIndex />
      </div>
    </div>
  );
}

export default App;

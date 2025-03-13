import { useState } from "react";
import "./App.css";
import ShutterScreen from "./components/ShutterScreen";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-light-lime-green font-orbitron">
      {!entered && <ShutterScreen onEnter={() => setEntered(true)} />}
      {entered && (
        <main className="p-10">
          <h1 className="text-4xl">Welcome to My Cyberpunk Portfolio</h1>
        </main>
      )}
    </div>
  );
}

export default App;

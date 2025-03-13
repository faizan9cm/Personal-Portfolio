import { useState } from "react";
import "./App.css";
import ShutterScreen from "./components/ShutterScreen";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <ShutterScreen onEnter={() => setEntered(true)} />
      ) : (
        <div>
          <Header />
          <Body />
        </div>
      )}
    </>
  );
};

export default App;

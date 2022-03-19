import { useState, useCallback } from "react";
import store, { useRootState } from "./store";
import logo from "./logo.svg";
import Dialog from "./Components/Dialog";
import MyInfo from './Components/MyInfo'
import "./App.css";
let i = 0;
function App() {
  const name = useRootState((state) => state.global.name);
  const [dialogShow, setDialogShow] = useState(false);
  function showDialog() {
    setDialogShow(true);
  }
  const handClose = useCallback(() => {
    setDialogShow(false);
  }, []);
  function changeName() {
    store.dispatch({ type: "changeName", payload: "tovinping" + ++i });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h1>my name is: {name}</h1>
        <button onClick={showDialog}>show Dialog</button>
        <button onClick={changeName}>change name</button>
        <Dialog visible={dialogShow} onClose={handClose} children={MyInfo}></Dialog>
      </section>
    </div>
  );
}

export default App;

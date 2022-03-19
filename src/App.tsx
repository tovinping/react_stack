import { useState, useCallback } from "react";
import { useRootState, dispatch } from "./store";
import Dialog from "./Components/Dialog";
import MyInfo from "./Components/MyInfo";
import ChildInfo from "./Components/ChildInfo";
import "./App.css";
let i = 0;
function App() {
  const { name, childList } = useRootState((state) => state.global);
  const [dialogShow, setDialogShow] = useState(false);
  function showDialog() {
    setDialogShow(true);
  }
  const handClose = useCallback(() => {
    setDialogShow(false);
  }, []);
  const changeName = () => {
    dispatch({ type: "updateName", payload: "tovinping" + ++i });
  };
  const addChild = () => {
    dispatch({ type: "addChild", payload: { id: ++i, name: "child" + i } });
  };
  return (
    <div className="App">
      <section>
        <h1>my name is: {name}</h1>
        <button onClick={showDialog}>show Dialog</button>
        <button onClick={changeName}>change name</button>
        <button onClick={addChild}>add child</button>
        <Dialog visible={dialogShow} onClose={handClose}>
          <MyInfo />
        </Dialog>
        <section>
          {childList.map((childId) => (
            <ChildInfo key={childId} childId={childId} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;

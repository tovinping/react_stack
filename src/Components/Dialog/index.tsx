import React, { useEffect, useRef, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { useRootState } from "../../store";
import "./index.css";
interface IDialog {
  visible: boolean;
  title?: string;
  onClose(): void;
}
function Dialog(props: React.PropsWithChildren<IDialog>) {
  const { visible, children, title = "提示", onClose } = props;
  const langCode = useRootState((state) => state.global.langCode);
  const [myVisible, setMyVisible] = useState(() => visible);
  const elRef = useRef<HTMLElement>();

  const handCreateElement = useCallback(() => {
    const divEl = document.createElement("div");
    divEl.className = "myDialog";
    elRef.current = divEl;
    document.body.appendChild(divEl);
  }, []);

  const handRemoveChild = useCallback(() => {
    if (elRef.current) {
      document.body.removeChild(elRef.current);
      elRef.current = undefined;
    }
  }, []);

  const handClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!visible) {
      handRemoveChild();
    } else {
      handCreateElement();
    }
    setMyVisible(visible);
  }, [visible, handRemoveChild, handCreateElement]);

  console.log("dialog render...", myVisible, visible);
  if (!myVisible || !elRef.current) return null;
  return ReactDOM.createPortal(
    <section className="myDialogPanel">
      <header className="myDialogTitle">
        <span>
          {title}
          {langCode}
        </span>
        <span onClick={handClose}>X</span>
      </header>
      <section className="myDialogContent">{children}</section>
    </section>,
    elRef.current
  );
}
export default React.memo(Dialog)
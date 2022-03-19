import React from "react";
import classnames from "classnames";
import { useRootState, dispatch } from "../../store";
import "./index.css";
export default React.memo(function ChildDetail({
  childId,
}: {
  childId: number;
}) {
  const childInfo = useRootState((state) => state.global.childMap[childId]);
  const isCurrent = useRootState((state) => state.global.currentChild === childId);
  const updateCurrent = () => {
    dispatch({ type: "updateCurrentChild", payload: childId });
  };
  console.log("child render", childId, isCurrent);
  return (
    <div
      className={classnames("childInfo", isCurrent && "active")}
      onClick={updateCurrent}
    >
      {childInfo.name}
    </div>
  );
});

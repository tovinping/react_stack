interface IChildInfo {
  id: number;
  name: string;
}
interface IState {
  name: string;
  age: number;
  langCode: "cn" | "en";
  currentChild: number
  childList: number[];
  childMap: Record<number, IChildInfo>;
}
type IAction =
  | { type: "updateAge"; payload: number }
  | { type: "updateName"; payload: string }
  | { type: "updateCurrentChild"; payload: number }
  | { type: "addChild"; payload: IChildInfo };

const initialState: IState = {
  name: "tovinping",
  age: 11,
  langCode: 'cn',
  childList: [],
  currentChild: 0,
  childMap: {},
};
export default function globalReducer(state = initialState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case "updateAge":
      return { ...state, age: payload };
    case "updateName":
      return { ...state, name: payload };
    case "addChild":
      return {
        ...state,
        childList: state.childList.concat(payload.id),
        childMap: { ...state.childMap, [payload.id]: payload },
      };
    case 'updateCurrentChild': {
      return {...state, currentChild: payload}
    }
    default:
      return state;
  }
}

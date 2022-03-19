const initialState = {
  name: "tangwenping",
  age: 33,
  langCode: 'cn'
};
export default function globalReducer(state = initialState, actions: any) {
  const { type, payload } = actions;
  switch (type) {
    case "changeName": {
      return { ...state, name: payload };
    }
    default:
      return state;
  }
}

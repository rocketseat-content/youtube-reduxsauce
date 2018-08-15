const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo
      );
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

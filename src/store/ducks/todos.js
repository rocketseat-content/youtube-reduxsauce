export const Types = {
  ADD_TODO: "todos/ADD_TODO",
  TOGGLE_TODO: "todos/TOGGLE_TODO",
  REMOVE_TODO: "todos/REMOVE_TODO"
};

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false }
      ];
    case Types.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo
      );
    case Types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  addTodo: text => ({
    type: Types.ADD_TODO,
    payload: {
      text
    }
  }),

  toggleTodo: id => ({
    type: Types.TOGGLE_TODO,
    payload: {
      id
    }
  }),

  removeTodo: id => ({
    type: Types.REMOVE_TODO,
    payload: {
      id
    }
  })
};

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id
    }
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: {
      id
    }
  };
}

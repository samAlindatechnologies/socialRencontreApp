const form = (state = [], action) => {
  switch (action.type) {
    case "ADD_FORM":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_FORM":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default form;

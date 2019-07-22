const INITIAL_STATE = [
  {
    id: 1,
    name: 'Fazer café',
    done: false,
  },
  {
    id: 2,
    name: 'Lavar roupa',
    done: false,
  },
];

function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          done: action.payload.done,
        },
      ];
    case 'MARKED_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export default todos;

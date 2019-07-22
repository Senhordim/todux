export const addTodo = () => ({
  type: 'ADD_TODO',
  payload: {
    id: Math.random(),
    name: 'Teste',
    done: false,
  },
});

export const markdTodo = id => ({
  type: 'MARKED_TODO',
  payload: { id },
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id },
});

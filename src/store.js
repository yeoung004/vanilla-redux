import { createStore } from 'redux'

const ADD = 'ADD'
const DEL = 'DEL'

const addTodo = (text) => {
  return {
    type: ADD,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: DEL,
    id: parseInt(id)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state]
    case DEL:
      return state.filter((toDo) => toDo.id !== action.id)
    default:
      return state
  }
}

export const actionCreator = {
  addTodo,
  deleteTodo
}

const store = createStore(reducer)

export default store
import { createStore } from 'redux'
import { createAction, createReducer } from '@reduxjs/toolkit'


// ToolKit
const addToDo = createAction('ADD')
const deleteToDo = createAction('DEL')
console.log(addToDo())
// Original Redux
// const ADD = 'ADD'
// const DEL = 'DEL'
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DEL,
//     id: parseInt(id)
//   }
// }

// Toolkit
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) => 
    state.filter((toDo) => toDo.id !== parseInt(action.payload))
})



// Original Redux
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state]
//     case DEL:
//       return state.filter((toDo) => toDo.id !== action.id)
//     default:
//       return state
//   }
// }

export const actionCreator = {
  addToDo,
  deleteToDo
}

const store = createStore(reducer)

export default store
import { useState } from "react"
import { connect } from 'react-redux'
import { actionCreator } from "../store"
import ToDo from '../Components/ToDo'

const Home = ({toDos, addTodo}) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {
          toDos.map((todo) => (
            <ToDo key={todo.id} {...todo}/>
          ))
        }
      </ul>
    </>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return { toDos : state }
}

const mapDispatchToPros = (dispatch) => {
  return{
    addTodo: (text) => dispatch(actionCreator.addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Home)
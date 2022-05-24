import React from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { actionCreator } from '../store'

const Detail = ({ toDos, onBtnClick }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const toDo = toDos.find(todo => todo.id === parseInt(id))

  const delHandler = () => {
    onBtnClick(id)
    navigate('/')
  }

  return (
    <>
      <h1>{toDo.text}</h1>
      <h2>Created at {new Date(toDo.id).toLocaleString()}</h2>
      <button onClick={delHandler}>delete</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return { toDos: state }
}

const mapDispatchToPros = (dispatch) => {
  return {
    onBtnClick: (id) => dispatch(actionCreator.deleteToDo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Detail)
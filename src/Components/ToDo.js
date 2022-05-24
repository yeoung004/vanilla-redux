import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

const ToDo = ({ id, text, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link> 
      <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

const mapDispatchToPros = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToPros)(ToDo)

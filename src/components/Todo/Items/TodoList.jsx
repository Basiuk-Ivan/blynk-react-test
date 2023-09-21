import { useStateContext } from '../../../context/useContext';

const TodoList = ({ setActiveTaskIdAndLocalStorage, handleDeleteClick }) => {
  const { tasks, activeTaskId } = useStateContext();

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`todo-item ${activeTaskId === task.id ? 'active' : ''}`}
          onClick={() => setActiveTaskIdAndLocalStorage(task.id)}
        >
          <div className="todo-text">{task.name}</div>
          <div className="todo-box-btn">
            <div className="todo-comment-length">{task.comments.length}</div>
            <button
              className="btn-delete"
              onClick={e => handleDeleteClick(e, task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

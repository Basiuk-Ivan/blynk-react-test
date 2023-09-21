import TodoWrapper from './Todo/Items/TodoWrapper';
import Comments from './Todo/Comments/Comments';

const Content = () => {
  return (
    <div className="todo-content">
      <div className="todo-container">
        <div className="todo-box">
          <TodoWrapper />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Content;

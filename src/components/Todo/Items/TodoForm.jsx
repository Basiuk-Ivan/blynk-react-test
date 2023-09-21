const TodoForm = ({ addTask, handleKeyPress, taskInputRef }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type name here..."
        ref={taskInputRef}
        onKeyDown={handleKeyPress}
        required
      />
      <button type="submit" onClick={addTask} className="button-add">
        Add New
      </button>
    </form>
  );
};

export default TodoForm;

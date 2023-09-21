import { useRef, useEffect } from 'react';
import { useStateContext } from '../../../context/useContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoWrapper = () => {
  const { tasks, setTasks, activeTaskId, setActiveTaskId } = useStateContext();
  const taskInputRef = useRef(null);

  useEffect(() => {
    loadTasksAndActiveTask();
  }, []);

  const loadTasksAndActiveTask = () => {
    const savedTasks = localStorage.getItem('tasks');
    const savedActiveTask = localStorage.getItem('active');

    if (savedTasks) {
      const parseSavedTasks = JSON.parse(savedTasks);
      setTasks(parseSavedTasks.length > 0 ? parseSavedTasks : tasks);
    }

    if (savedActiveTask) {
      const parseSavedActiveTask = JSON.parse(savedActiveTask);
      setActiveTaskId(parseSavedActiveTask.id);
    } else {
      setActiveTaskId(tasks[0].id);
    }
  };

  const addTask = e => {
    e.preventDefault();
    const newTaskText = taskInputRef.current.value;
    if (newTaskText) {
      const newTask = {
        id: Date.now() % 100000000,
        name: newTaskText,
        comments: [],
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      localStorage.setItem('active', JSON.stringify(tasks[0]));

      taskInputRef.current.value = '';
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    if (activeTaskId === id) {
      if (updatedTasks.length > 0) {
        setActiveTaskId(updatedTasks[0].id);
        localStorage.setItem('active', JSON.stringify(updatedTasks[0]));
      } else {
        setActiveTaskId(null);
        localStorage.removeItem('active');
      }
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      addTask(event);
    }
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();

    deleteTask(id);
  };

  const setActiveTaskIdAndLocalStorage = id => {
    setActiveTaskId(id);

    const newTask = tasks.find(task => task.id === id);
    if (newTask) {
      localStorage.setItem('active', JSON.stringify(newTask));
    }
  };

  return (
    <div>
      <div className="box todo-items">
        <div className="title-box items-title">Items</div>
        <TodoForm
          addTask={addTask}
          handleKeyPress={handleKeyPress}
          taskInputRef={taskInputRef}
        />
        <TodoList
          handleDeleteClick={handleDeleteClick}
          setActiveTaskIdAndLocalStorage={setActiveTaskIdAndLocalStorage}
        />
      </div>
    </div>
  );
};

export default TodoWrapper;

import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const defaultTasks = [
    {
      id: Date.now() % 100000000,
      name: 'Тест',
      comments: [{ id: '', body: 'Test', color: 'black' }],
    },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [commentText, setCommentText] = useState('');
  const [commentColor, setCommentColor] = useState('black');
  const [currentCommentNumber, setCurrentCommentNumber] = useState(0);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [defaultCommentColor, setDefaultCommentColor] = useState('#000');

  const [activeTask, setActiveTask] = useState(null);

  return (
    <StateContext.Provider
      value={{
        tasks,
        setTasks,
        commentText,
        setCommentText,
        commentColor,
        setCommentColor,
        currentCommentNumber,
        setCurrentCommentNumber,
        activeTaskId,
        setActiveTaskId,
        activeTask,
        setActiveTask,
        defaultCommentColor,
        setDefaultCommentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

import { useEffect } from 'react';
import { useStateContext } from '../../../context/useContext';
import CommentsFrom from './CommentsFrom';
import CommentsActiveTask from './CommentsActiveTask';

const Comments = () => {
  const {
    tasks,
    setTasks,
    commentText,
    setCommentText,
    commentColor,
    setCommentColor,
    currentCommentNumber,
    setCurrentCommentNumber,
    activeTaskId,
    defaultCommentColor,
  } = useStateContext();

  const activeTask = tasks.find(task => task.id === activeTaskId);

  useEffect(() => {
    loadCommentNumber();
  }, []);

  const loadCommentNumber = () => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);

      let maxCommentNumber = 0;
      parsedTasks.forEach(task => {
        task.comments.forEach(comment => {
          const commentNumber = parseInt(comment.id.split('-')[1]);
          if (!isNaN(commentNumber) && commentNumber > maxCommentNumber) {
            maxCommentNumber = commentNumber;
          }
        });
      });

      setCurrentCommentNumber(maxCommentNumber + 1);
    }
  };

  const addComment = e => {
    e.preventDefault();

    if (!commentText.trim()) {
      return;
    }

    const newComment = {
      id: `${activeTask.id}-${currentCommentNumber + 1}`,
      body: commentText,
      color: commentColor,
    };

    setCurrentCommentNumber(currentCommentNumber + 1);

    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.id === activeTask.id);

    if (taskIndex !== -1) {
      updatedTasks[taskIndex].comments.push(newComment);
      setTasks(updatedTasks);

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      localStorage.setItem('active', JSON.stringify(activeTask));
    }

    setCommentText('');
    setCommentColor(defaultCommentColor);
  };

  return (
    <div>
      <div className="box comments">
        <div className="title-box comments-title">{`Comments #${
          activeTaskId || ''
        }`}</div>
        <CommentsActiveTask activeTask={activeTask} />
        <CommentsFrom
          commentColor={commentColor}
          setCommentColor={setCommentColor}
          commentText={commentText}
          setCommentText={setCommentText}
          addComment={addComment}
        />
      </div>
    </div>
  );
};

export default Comments;

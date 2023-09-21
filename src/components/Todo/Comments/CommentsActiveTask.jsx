const CommentsActiveTask = ({ activeTask }) => {
  return (
    <>
      {activeTask && activeTask.comments.length > 0 && (
        <div className="comments-result">
          <div className="result-body">
            {activeTask.comments.map(item => (
              <div className="result-box" key={item.id}>
                <div
                  className="result-color"
                  style={{ backgroundColor: item.color || 'defaultColor' }}
                ></div>
                <div className="result-item">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsActiveTask;

const CommentsFrom = ({
  commentColor,
  setCommentColor,
  commentText,
  setCommentText,
  addComment,
}) => {
  return (
    <form className="comments-form">
      <input
        className="input-color"
        type="color"
        value={commentColor}
        onChange={e => setCommentColor(e.target.value)}
      />
      <textarea
        className="textarea"
        rows={3}
        cols={45}
        placeholder="Type comment here..."
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
        required
      />

      <button type="submit" className="btn-comments" onClick={addComment}>
        Add new
      </button>
    </form>
  );
};

export default CommentsFrom;

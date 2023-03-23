export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(slug, data.comment);
    event.target.reset();
  }

  return (
    <form aria-label="create comment" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="comment">Comment</label>
        <input
          id="comment"
          name="comment"
          type="text"
          placeholder="Leave a comment..."
          required
        />
        <button type="submit" aria-label="send">
          Send
        </button>
      </fieldset>
    </form>
  );
}

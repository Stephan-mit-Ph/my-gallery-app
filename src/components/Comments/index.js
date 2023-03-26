import { uid } from "uid";

export default function Comments({ comments = [] }) {
  return (
    <ul>
      {comments?.map((comment) => {
        return (
          <li key={uid()}>
            <p>Comment: {comment.text}</p>
            <span>Date: {comment.date}</span>
            <br></br>
            <span>Time: {comment.time}</span>
          </li>
        );
      })}
    </ul>
  );
}

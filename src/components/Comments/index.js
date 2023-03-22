
export default function CommentList({comments}) {
    return (
        <ul>
            <article>
                <span>{comments.date}</span>
                <span>{comments.time}</span>
                <p>{comments.notes}</p>
            </article>
        </ul>
    );
}


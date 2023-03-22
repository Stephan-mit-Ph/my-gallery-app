export default function Comment({ commentForm }) {
        return(
        <div>
        <form aria-label="create comment" onSubmit={handleSubmit} >
        <fieldset>
           <label for="comment">Comment</label>
            <input type="text" placeholder="Leave a comment..." />     
           <button type="submit" aria-label="send">Send</button>
         </fieldset>
        </form>
        </div>
        );
}
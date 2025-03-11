export default function AddBook(){
    return(
        <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form>
        <input type="text" name="title" placeholder="Title" required />
        <br/>
        <input type="text" name="author" placeholder="Author" required />
        <br/>
        <textarea name="description" placeholder="Description" required />
        <br/>
        <input type="url" name="coverUrl" placeholder="Cover Image URL"required />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}
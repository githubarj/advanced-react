import axios from "axios";
import { useState } from "react";

function Post() {
  const [data, setFormData] = useState({
    title: "",
    body: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="post-container">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="title"
          id="title"
          required
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="textbox"
          name="body"
          id="body"
          required
          value={data.body}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

        

    </div>
  );
}

export default Post;

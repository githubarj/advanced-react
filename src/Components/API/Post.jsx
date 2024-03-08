import "./api.css";
import Form from "./Form";
import axios from "axios";
import { useContext } from "react";
import { FormContext } from "../../App";

function Post() {
  const { data } = useContext(FormContext);

  const method = () =>
    axios.put("https://jsonplaceholder.typicode.com/posts/1", data);

  return (
    <Form task="Posting" alertMessage="Sent Successfully" method={method} />
  );
}

export default Post;
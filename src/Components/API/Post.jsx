import "./api.css";
import Form from "./Form";
import axios from "axios";
import { useContext } from "react";
import { FormContext } from "../../App";

function Post() {
  const { data } = useContext(FormContext);

  const method = axios
    .post("https://jsonplaceholder.typicode.com/posts", data)
    .then((res) => res);

  return (
    <Form
      task="Posting"
      alertMessage="Sent Successfully"
      method={method}
      buttonText="Post"
    />
  );
}

export default Post;

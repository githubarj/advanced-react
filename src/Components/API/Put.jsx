import Form from "./Form";
import axios from "axios";
import { useContext } from "react";
import { FormContext } from "../../App";

function Put() {
  const { data } = useContext(FormContext);

  const method = axios
    .put("https://jsonplaceholder.typicode.com/posts/1", data)
    .then((res) => res);
  return (
    <Form
      task="Updating"
      alertMessage="Updated Successfully"
      method={method}
      buttonText=" Update"
    />
  );
}

export default Put;

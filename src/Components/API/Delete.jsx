import "./api.css";
import Form from "./Form";
import axios from "axios";

function GetData() {
  const method = axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res)


  return (
    <Form
      show="none"
      task="Delete Data"
      alertMessage="Deleted Successfully"
      method={method}
      buttonText="Delete Data"
    />
  );
}

export default GetData;

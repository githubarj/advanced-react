import "./api.css";
import Form from "./Form";
import axios from "axios";

function GetData() {

  const method = axios
    .get("https://jsonplaceholder.typicode.com/posts/1",)
    .then((res) => res);

  return (
    <Form
      show="none"
      task="Get Data"
      alertMessage="Retrieved Successfully"
      method={method}
      buttonText="Get Data"
    />
  );
}

export default GetData;

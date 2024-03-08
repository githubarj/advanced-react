import "./api.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../App";

function Form({ method, alertMessage, task, buttonText, show }) {
  const { data, setFormData } = useContext(FormContext);

  let [display, setDisplay] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormData({ title: "", body: "" });
    try {
      let res = await method;
      alert(alertMessage);
      setDisplay({
        title: res.data.title,
        body: res.data.body,
        id: res.data.id,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="post-container">
        <form onSubmit={handleSubmit}>
          <h2>{task}</h2>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
            style={{ display: show }}
          />
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Body"
            value={data.body}
            onChange={handleChange}
            style={{ display: show }}
          />
          <button type="submit">{buttonText}</button>
        </form>
        <hr />
        <div id="data-returned">
          <p>Id: {display.id} </p>
          <h3>Title: {display.title}</h3>
          <p>Body: {display.body}</p>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  method: PropTypes.object,
  task: PropTypes.string,
  show: PropTypes.string,
  buttonText: PropTypes.string,
  alertMessage: PropTypes.string,
};

export default Form;

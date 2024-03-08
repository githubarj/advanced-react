import "./api.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../App";

function Form({ method, alertMessage, task }) {
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
      console.log(res.data);
      alert(alertMessage);
      setDisplay({ title: data.title, body: data.body });
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
            required
            value={data.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Body"
            required
            value={data.body}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div id="data-returned">
          <h3>{display.title}</h3>
          <p>{display.body}</p>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  method: PropTypes.func,
  task: PropTypes.string,
  alertMessage: PropTypes.string,
};

export default Form;

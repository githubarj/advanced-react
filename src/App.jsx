import "./App.css";
import Get from "./Components/API/Get";
import GetData from "./Components/API/GetData";
import Post from "./Components/API/Post";
import Put from "./Components/API/Put";
import Delete from "./Components/API/Delete"
// import Avatar from "./Components/Avatar/Avatar";
import Menu from "./Components/Menu/MenuIndex";

// import Button from "./Components/Button";
// import { FcGoogle } from "react-icons/fc";
import { createContext, useState } from "react";

export const FormContext = createContext();

function App() {
  let items = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  const [data, setFormData] = useState({
    title: "",
    body: "",
  });

  return (
    <FormContext.Provider value={{ data, setFormData }}>
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {items.map((item, index) => (
            <Menu.Item key={index}> {item}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <Get />
      <GetData />
      <Put />
      <Post />
      <Delete />
      {/* <Button onClick={logIn} variant="success" size="sm" className="green">
        <FcGoogle />
        Log in with Google
      </Button> */}
      {/* <Avatar src="" alt="" />
      <Avatar> BZ </Avatar>
      <Avatar /> */}
    </FormContext.Provider>
  );
}

export default App;

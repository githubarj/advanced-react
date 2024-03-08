import "./App.css";
import Get from "./Components/API/Get";
import GetData from "./Components/API/GetData";
import Post from "./Components/API/Post";
import Put from "./Components/API/Put";
// import Avatar from "./Components/Avatar/Avatar";
import Menu from "./Components/Menu/Menu";
import MenuButton from "./Components/Menu/MenuButton";
import MenuDropdown from "./Components/Menu/MenuDropdown";
import MenuItem from "./Components/Menu/MenuItem";
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
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {items.map((item, index) => (
            <MenuItem key={index}> {item}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>

      <Get />
      <GetData />
      <Put />
      <Post />

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

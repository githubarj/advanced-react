import "./App.css";
import Get from "./Components/API/Get";
// import Avatar from "./Components/Avatar/Avatar";
import Menu from "./Components/Menu/Menu";
import MenuButton from "./Components/Menu/MenuButton";
import MenuDropdown from "./Components/Menu/MenuDropdown";
import MenuItem from "./Components/Menu/MenuItem";
// import Button from "./Components/Button";
// import { FcGoogle } from "react-icons/fc";

function App() {
  let items = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <main>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {items.map((item, index) => (
            <MenuItem key={index}> {item}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>

            <Get />


      {/* <Button onClick={logIn} variant="success" size="sm" className="green">
        <FcGoogle />
        Log in with Google
      </Button> */}
      {/* <Avatar src="" alt="" />
      <Avatar> BZ </Avatar>
      <Avatar /> */}
    </main>
  );
}

export default App;

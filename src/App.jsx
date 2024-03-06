import "./App.css";
// import Avatar from "./Components/Avatar/Avatar";
import Menu from "./Components/Menu/Menu";
import MenuButton from "./Components/Menu/MenuButton";
import MenuDropdown from "./Components/Menu/MenuDropdown";
// import Button from "./Components/Button";
// import { FcGoogle } from "react-icons/fc";

function App() {
  // const logIn = () => console.log("Logging in ...");

  return (
    <main>
      <Menu>
        <MenuButton buttonText="Sports" />
        <MenuDropdown
          items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
        />
      </Menu>

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

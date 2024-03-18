import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "grid",
        element : <Grid />
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={routes} />;
}



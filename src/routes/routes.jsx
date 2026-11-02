import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Juego1Page from "../pages/JuegoHoraDeComer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
        path: "/juego1",
        element: <Juego1Page />
      }
    ]
  }
]);

import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="d-flex">
      <Nav />
      <div className="flex-1 ml-4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

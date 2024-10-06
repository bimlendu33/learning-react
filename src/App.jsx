import { NavLink } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <>
      <div className="m-5">
        <h3 className="subject-title">
          Learn React{" "}
          <NavLink to={""}>
            <small>back</small>
          </NavLink>
        </h3>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

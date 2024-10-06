import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="my-3">
        <ul className="topics-wrapper">
          <NavLink
            to={"elements"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="subject">React Elements</li>
          </NavLink>

          <NavLink
            to={"composition"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="subject">Composition</li>
          </NavLink>
          <NavLink
            to={"nested-routes"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="subject">Nested Routing</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

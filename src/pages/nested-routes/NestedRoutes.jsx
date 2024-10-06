import { NavLink, Outlet } from "react-router-dom";
import styles from "./NestedRoute.module.css";

export default function NestedRoutes() {
  return (
    <>
      <div className="my-3 d-flex justify-content-center gap-1">
        <NavLink
          to="apple"
          className={({ isActive }) =>
            isActive
              ? `${styles.customBadge} ` + styles.activeapple
              : `${styles.customBadge} ` + styles.inactive
          }
        >
          <span className={`badge`}>Apple</span>
        </NavLink>
        <NavLink
          to="orange"
          className={({ isActive }) =>
            isActive
              ? `${styles.customBadge} ` + styles.activeorange
              : `${styles.customBadge} ` + styles.inactive
          }
        >
          <span className={`badge `}>Orange</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

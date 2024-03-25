import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import css from "./Layout.module.css";
export default function Layout() {
  return (
    <div className={css.container}>
      <Navigation />
      <Outlet />
    </div>
  );
}

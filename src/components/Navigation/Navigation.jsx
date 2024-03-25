import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <header className={css.header}>
      <NavLink className={getNavLinkClassNames} to="/">
        <h1 className={css.title}>Home</h1>
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/movies">
        <h1 className={css.title}>Movies</h1>
      </NavLink>
    </header>
  );
};

export default Navigation;

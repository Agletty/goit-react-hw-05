import css from "./PageTitle.module.css";

export const PageTitle = ({ text }) => {
  return <div className={css.pageHeader}>{text}</div>;
};

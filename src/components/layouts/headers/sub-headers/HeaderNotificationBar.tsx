import { NavLink } from "react-router-dom";

const HeaderNotificationBar = () => {
  return (
    <NavLink className="header-bar-notification" to="#">
      <strong>Notification du jour</strong>
      <svg className="dot-separator" fill="currentColor" aria-hidden="true"><circle cx="2" cy="2" r="2" /></svg>
      <span className="large-resolution "> React + Typescript, ça tourne mal</span>
      <span className="middle-resolution ">React + Typescript</span>
      <svg className="arrow-cta" aria-hidden="true" ><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </NavLink>
  );
}

export default HeaderNotificationBar
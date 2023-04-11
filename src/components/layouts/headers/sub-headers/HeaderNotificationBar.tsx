import { NavLink } from "react-router-dom";

const HeaderNotificationBar = () => {
  return (
    <NavLink className="header-bar-notification" to="#">
      <strong>Notification du jour</strong>
      <svg className="dot-separator" fill="currentColor" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>
      <span className="min-[1372px]:hidden">React + Typescript</span>
      <span className="hidden min-[1372px]:inline"> React + Typescript, ça tourne mal </span>
      <svg className="arrow-cta" aria-hidden="true" ><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </NavLink>
  );
}

export default HeaderNotificationBar
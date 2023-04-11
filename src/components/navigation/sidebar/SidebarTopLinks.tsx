import { NavLink } from 'react-router-dom';

// NOTE 1
// Une fonction a été ajoutée au component ci-dessous
// qui permet d'insérer la classe "active" à un élément en
// fonction de l'URL actuel

// NOTE 2
// Inutile car le composant NavLink le fait tout seul *_*

const SidebarTopLinks = () => {
  return (
    <ul className='sidebar-top-links'>
      <li>
        <NavLink to="/docs" className="flex" >
            <div className="svg-box-container">
                <svg viewBox="0 0 24 24" fill="none">
                    {" "}
                    <path
                        fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                        className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300" >
                    </path>
                    {" "}
                    <path
                        fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                        className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200" >
                    </path>
                    {" "}
                </svg>
            </div>
            Documentation
        </NavLink>
      </li>
      <li>
        <NavLink to="/exercices" className="flex" >
            <div className="svg-box-container">
                <svg viewBox="0 0 24 24" fill="none"> {" "} <path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400" ></path>{" "} <path d="m6 9 6 3v7l-6-3V9Z" className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500" ></path>{" "} <path d="m18 9-6 3v7l6-3V9Z" className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600" ></path>{" "} </svg>
            </div>
            Terrain d'exercices
        </NavLink>
      </li>
    </ul>
  );
}

export default SidebarTopLinks
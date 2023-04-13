const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="search-bar-content">
            <button type="button" className="hidden lg:flex text-sm text-slate-400 shadow-sm hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
            {" "}
            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none" > {" "} <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path>{" "} <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></circle>{" "} </svg>
            Rechercher ...
            <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                Ctrl K
            </span>
            </button>
        </div>
    </div>
  )
}

export default SearchBar
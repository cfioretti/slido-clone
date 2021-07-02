import React from 'react';
import AuthService from "../../services/Auth";

const Header = () => {
    const handleLogout = (e) => {
        e.preventDefault();
        AuthService.Logout()
    };

    return (
        <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
            <div>
                <button type="submit"
                        onClick={handleLogout}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                      <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                           xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    </svg>
                                  </span>
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Header;
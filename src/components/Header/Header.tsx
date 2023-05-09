import React from 'react';
import {Link, NavLink} from "react-router-dom";
const Header = () => {

    return (
        <header id="header" className="bg-blue-500">
            <div className="container">
                <div className="header flex items-center justify-between">
                    <h1 className='text-3xl text-red-700 py-5 px-5'>TMDB</h1>
                    <div className=" flex items-center justify-between">
                        <Link className='text-1.5xl text-blue-100 py-4 px-2 ' to={'/popular'}>Popular</Link>
                        <Link className='text-1.5xl text-blue-100 py-4 px-2' to={'/top-rated'}>Top
                            Rater</Link>
                        <Link className='text-1.5xl text-blue-100 py-4 px-2 ' to={'now-playing'}>Now
                            Playing</Link>
                    </div>
                    <div className="">
                        <button type="button"
                                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
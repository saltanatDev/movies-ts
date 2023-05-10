import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {upDate} from "../../store/Reducer/PopularSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {getValue} from "../../store/Reducer/PopularSlice";

const Header = () => {
    const dispatch = useAppDispatch()
    const {valueS,mode} = useAppSelector(s => s.popularSlice)
    console.log(valueS)

    const handleChange = (e:any) => {
        dispatch(getValue(e.target.value))
    }
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
                    <select id="underline_select"
                            onChange={handleChange}
                            className="block py-2.5 px-0  text-sm text-black font-bold bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="en-US">usa</option>
                        <option value="ru-RU">Russian</option>
                        {/*<option value="fr">France</option>*/}
                        {/*<option value="ge">Germany</option>*/}
                    </select>

                    <div className="">
                        <button onClick={() => dispatch(upDate(!mode))}
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Blue
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
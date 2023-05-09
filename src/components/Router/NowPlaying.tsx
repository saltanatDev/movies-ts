import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import PERSON from "../../Image/person-icon.png";
import {getNowPlay} from "../../store/Reducer/ActionCreators";

const NowPlaying = () => {
    const {nowPlay, error, loader} = useAppSelector((state) => state.NowPlaySlice)
    // console.log(nowPlay)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getNowPlay())
    }, [])
    return (
        <div className='flex justify-between flex-wrap'>
            {
                nowPlay.map(el => (
                    <div className='flex'>
                        <div className=''>
                            {
                                el.poster_path ?
                                    <img width={300} className='mx-5 my-5 '
                                         src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                    :
                                    <img src={PERSON} alt=""/>
                            }
                            <NavLink to={`/detailPage/${el.id}`}>
                                <h1 className=' text-1xl px-3 pu-2 text-center my-5 font-bold  cursor-pointer '>{el.title}</h1>
                            </NavLink>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NowPlaying;
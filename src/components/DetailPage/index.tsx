import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getDetail} from "../../store/Reducer/ActionCreators";
import "./index.scss"
import ActionPage from "../Action/ActionPage";
import {VscChecklist} from 'react-icons/vsc'
import {VscBookmark} from 'react-icons/vsc'
import {VscHeartFilled} from 'react-icons/vsc'
import {VscStarFull} from 'react-icons/vsc'


const DetailPage = () => {
    const {popular, loader, error} = useAppSelector((state) => state.popularSlice)
    const {movieId} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDetail(movieId))
    }, [movieId])
    return (
        <>
            <div id='detail' style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${popular.backdrop_path})`
            }}>
                <div className="detail absolute">
                    <img width={400} className='mx-5 my-5 '
                         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${popular.poster_path}`}
                         alt=""/>
                    <div className=' mx-5 my-10'>
                        <h1 className='text-5xl text-white font-bold py-5 '>{popular.original_title}</h1>
                        <h1 className='text-2xl text-white'>{popular.release_date}</h1>
                        <div className='flex items-center  '>
                            <div className=' detail--nav  flex items-center '>
                                <div className='detail--nav__dot font-bold'>
                                    {popular.vote_average} %
                                </div>
                            </div>
                            <div className='detail--nav__text'>
                                <h1 className='text-white text-2xl font-bold'>Рейтинг</h1>
                            </div>
                            <div className='icons'>
                                <VscChecklist/>
                            </div>
                            <div className='icons'>
                                <VscHeartFilled/>
                            </div>
                            <div className='icons'>
                                <VscBookmark/>
                            </div>
                            <div className='icons'>
                                <VscStarFull/>
                            </div>

                        </div>

                        <h1 className='text-2xl text-white'>{popular.status}</h1>
                        <p className='text-3xl text-white font-bold py-2'>Обзор</p>
                        <h1 className='text-2xl text-white py-2 '>{popular.overview}</h1>
                    </div>
                </div>

            </div>
            <div className='container'>
                <ActionPage/>
            </div>
        </>

    );
};

export default DetailPage;

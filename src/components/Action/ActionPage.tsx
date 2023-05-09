import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {NavLink, useParams} from "react-router-dom";
import {getAction} from "../../store/Reducer/ActionCreators";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import Slider from "react-slick"

const ActionPage = () => {
    const {actor} = useAppSelector(s => s.ActorSlice)
    const {users} = useAppSelector(s => s.actionSlice)
    const dispatch = useAppDispatch()
    const {movieId} = useParams()

    console.log(users)
    useEffect(() => {
        dispatch(getAction(movieId))
    }, [movieId])



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    users.map(el => (
                        <div className='action'>
                            <div className='items-center flex-wrap container'>
                                <div>
                                    <img className=' py-10 ' width={200}
                                         src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.poster_path}`}
                                         alt=""/>
                                    <NavLink to={`/detailActor/${el.id}`}>
                                        <h1 className='text-2xl  px-2 fond-bold '>{el.name}</h1>
                                    </NavLink>

                                </div>
                            </div>

                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ActionPage;
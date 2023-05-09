import React, {useEffect} from 'react';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {NavLink, useParams} from "react-router-dom";
import {getActorsMovie} from "../../../../store/Reducer/ActionCreators";
import Slider from "react-slick"


const ActorMovie = () => {
    const {actor} = useAppSelector(state => state.ActorsSlice)
    const dispatch = useAppDispatch()
    console.log(actor)
    const {Id} = useParams()

    useEffect(() => {
        dispatch(getActorsMovie(Id))
    }, [Id])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    {
                    actor.map(el => (
                        <div className='mx-5 my-4'>
                            <img width={200}
                                 className='rounded-bl-full'
                                 src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                            <NavLink to={`/detailPage/${el.id}`}>
                                <h1 className=' text-1xl px-3 pu-2 text-center my-5 font-bold  cursor-pointer '>{el.title}</h1>
                            </NavLink>
                        </div>
                    ))
                }
                </Slider>

            </div>
        </div>
    );
};

export default ActorMovie;
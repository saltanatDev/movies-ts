import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {getActorDetail} from "../../../store/Reducer/ActionCreators";
import ActorSlice from "./actorMovie/ActorMovie";

const ActorPage = () => {
    const [more, setMore] = useState(300)
    const printText: any = (text: number[]) => {
        if (more === 300) {
            setMore(text.length)
        } else {
            setMore(300)
        }
    }

    const {error, loader, actor} = useAppSelector(s => s.ActorSlice)

    const dispatch = useAppDispatch()
    const {Id} = useParams()
    useEffect(() => {
        dispatch(getActorDetail(Id))
    }, [])

    return (
        <div className='container '>
            <div className='flex items-start my-10'>
                <img width={350}
                     className='border-2 '
                     src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/DPnessSsWqVXRbKm93PtMjB4Us.jpg`} alt=""/>
                <div className='ml-10'>
                    <h1 className='text-3xl text-black font-bold py-5 '>{actor.name}</h1>
                    {/*<h2>{actor.birthday}</h2>*/}
                    <h2 className='text-2xl text-black  py-2'>Биография</h2>
                    <p className='text-1xl '>{actor.biography && actor.biography.slice(0, more)}</p>
                    {
                        actor.biography && actor.biography.length > 300 &&
                        <span className='cursor-pointer text-blue-700'
                              onClick={printText}>{more === 300 ? 'view more' : 'close'}</span>
                    }
                </div>

            </div>
            <h3 className='text-3xl text-black font-bold'>Известность за</h3>
            <ActorSlice/>
        </div>
    );
};

export default ActorPage;
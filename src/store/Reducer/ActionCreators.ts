import {AppDispatch} from "../index";
import {fetchPopular, fetchPopularError, fetchPopularSuccess} from "./MoviesSlice";
import axios from "axios";
import {Apikey} from "../../Apikey/Apikey";
import {fetchingDetail, fetchingDetailError, fetchingDetailSuccess} from "./PopularSlice";
import {fetchingActionDetail, fetchingActionError, fetchingActionSuccess} from "./ActionSlice";
import {fetchingTop, fetchingTopError, fetchingTopSuccess} from "./TopRaghtSlice";
import {fetchingNow, fetchingNowPlayError, fetchingNowPlaySuccess} from "./NowplaySlice";
import {fetchingActorDetail, fetchingActorError, fetchingActorSuccess} from "../../components/Action/ActorDetail/ActorSlice";
import {getActorsDetail, getActorsError, getActorsSuccess} from "../../components/Action/ActorDetail/actorMovie/actorMovieSlicew";

export const getPopular = (valueS: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchPopular())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${valueS}-US&page=1`)
            dispatch(fetchPopularSuccess(response.data.results))
        } catch (e: any) {
            dispatch(fetchPopularError(e.message))
        }
    }
}
export const getAction = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Apikey}&language=en-US`)
            dispatch(fetchingActionSuccess(response.data.cast))
        } catch (e: any) {
            dispatch(fetchingActionError(e.message))

        }
    }
}
export const getActorsMovie = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getActorsDetail)
            const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Apikey}&language=en-US`)
            dispatch(getActorsSuccess(response.data.cast))
        } catch (e: any) {
            dispatch(getActorsError(e.message))
        }
    }
}
export const getTopRight = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingTop)
            const responce = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=en-US&page=1`)
            dispatch(fetchingTopSuccess(responce.data.results))
        } catch (e: any) {
            dispatch(fetchingTopError(e.message))
        }
    }
}

export const getNowPlay = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=en-US&page=1`)
            dispatch(fetchingNowPlaySuccess(response.data.results))
        } catch (e: any) {
            dispatch(fetchingNowPlayError(e.message))
        }
    }
}

export const getDetail = (movieId: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingDetail(movieId))
            const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=en-US`)
            dispatch(fetchingDetailSuccess(response.data))
        } catch (e: any) {
            dispatch(fetchingDetailError(e.message))
        }
    }
}

export const getActorDetail = (Id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActorDetail(Id))
            const response = await axios(`https://api.themoviedb.org/3/person/${Id}?api_key=${Apikey}&language=en-US`)
            console.log(response)
            dispatch(fetchingActorSuccess(response.data))
        } catch (e: any) {
            dispatch(fetchingActorError(e.message))
        }
    }
}

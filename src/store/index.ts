import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MoviesSlice  from "./Reducer/MoviesSlice";
import popularSlice from "./Reducer/PopularSlice";
import actionSlice from "./Reducer/ActionSlice";
import topRightSlice from "./Reducer/TopRaghtSlice";
import NowPlaySlice from "./Reducer/NowplaySlice";
import ActorSlice from "../components/Action/ActorDetail/ActorSlice";
import  ActorsSlice from "../components/Action/ActorDetail/actorMovie/actorMovieSlicew";

const  rootReducer = combineReducers({
    MoviesSlice,
    popularSlice,
    actionSlice,
    topRightSlice,
    NowPlaySlice,
    ActorSlice,
    ActorsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export  type  rooState = ReturnType<typeof rootReducer>
 type AppStore = ReturnType< typeof  setupStore>
 export  type AppDispatch = AppStore['dispatch']
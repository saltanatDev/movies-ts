import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPopular} from "../../types/IMovies";

interface IMoviesState {
    movies: IPopular[]
    loader: boolean
    error: string
}

const initialState: IMoviesState = {
    movies: [],
    loader: false,
    error: '',
}
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchPopular(state) {
            state.loader = true
        },
        fetchPopularSuccess(state, action: PayloadAction<IPopular[]>) {
            state.movies = action.payload
        },
        fetchPopularError(state, action) {
            state.error = "error"
        }
    }

})
export const {fetchPopular, fetchPopularSuccess, fetchPopularError} = moviesSlice.actions
export default moviesSlice.reducer

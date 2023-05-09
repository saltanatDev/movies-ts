import {INowPlaying, } from "../../types/IMovies";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface INowSLice {
    nowPlay: INowPlaying[]
    loader: boolean
    error: string
}

const initialState: INowSLice = {
    nowPlay: [],
    loader: false,
    error: '',
}
export const NowPlaySlice = createSlice({
    name: 'nowPlay',
    initialState,
    reducers: {
        fetchingNow(state, action: PayloadAction<any>) {
            state.loader = true
        },
        fetchingNowPlaySuccess(state, action: PayloadAction<INowPlaying[]>) {
            state.loader = false
            state.nowPlay = action.payload
            state.error = ''
        },
        fetchingNowPlayError(state, action: PayloadAction<string>) {
            state.loader = false
            state.nowPlay = []
            state.error = "error"
        }
    }

})
export default NowPlaySlice.reducer
export const {fetchingNow, fetchingNowPlaySuccess, fetchingNowPlayError} = NowPlaySlice.actions
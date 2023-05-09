import {IDetailPages, ITopRight} from "../../types/IMovies";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITopSLice {
    topRight: ITopRight[]
    loader: boolean
    error: string
}

const initialState: ITopSLice = {
    topRight: [],
    loader: false,
    error: '',
}
export const topRaghtSlice = createSlice({
    name: 'topRight',
    initialState,
    reducers: {
        fetchingTop(state, action) {
            state.loader = true
        },
        fetchingTopSuccess(state, action: PayloadAction<ITopRight[]>) {
            state.loader = false
            state.topRight = action.payload
            state.error = ''
        },
        fetchingTopError(state, action: PayloadAction<string>) {
            state.loader = false
            state.topRight = []
            state.error = "error"
        }
    }
})

export default topRaghtSlice.reducer
export const {fetchingTop, fetchingTopSuccess, fetchingTopError} = topRaghtSlice.actions
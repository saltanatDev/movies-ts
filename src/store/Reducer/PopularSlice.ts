import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetailPages} from "../../types/IMovies";


interface IPopularSlice {
    popular: Partial<IDetailPages>
    loader: boolean
    error: string
}

const initialState: IPopularSlice = {
    popular: {},
    loader: false,
    error: ""
}

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
            fetchingDetail(state , action){
            state.loader = true
        },
        fetchingDetailSuccess(state, action:PayloadAction<IDetailPages>){
            state.loader = false
            state.popular = action.payload
            state.error = ''
        },
        fetchingDetailError(state, action: PayloadAction<string>) {
            state.loader = false
            state.popular = {}
            state.error = "error"
        }
    }
})
export default popularSlice.reducer
export const {fetchingDetail, fetchingDetailSuccess, fetchingDetailError} = popularSlice.actions
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetailPages} from "../../types/IMovies";


interface IPopularSlice {
    popular: Partial<IDetailPages>
    loader: boolean
    error: string
    mode: boolean
    valueS: any
}

const initialState: IPopularSlice = {
    popular: {},
    loader: false,
    error: "",
    mode: false,
    valueS: {
        usa: "en-US",
        ru: 'ru-RU'
    }
}

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        fetchingDetail(state, action) {
            state.loader = true
        },
        fetchingDetailSuccess(state, action: PayloadAction<IDetailPages>) {
            state.loader = false
            state.popular = action.payload
            state.error = ''
        },
        fetchingDetailError(state, action: PayloadAction<string>) {
            state.loader = false
            state.popular = {}
            state.error = "error"
        },
        upDate(state, action: PayloadAction<boolean>) {
            state.mode = action.payload
        },
        getValue(state, action) {
            state.valueS = action.payload
        },
        upDates(state, action: PayloadAction<boolean>) {
            state.mode = action.payload
        }
    }
})
export default popularSlice.reducer
export const {fetchingDetail, fetchingDetailSuccess, fetchingDetailError,getValue, upDate} = popularSlice.actions
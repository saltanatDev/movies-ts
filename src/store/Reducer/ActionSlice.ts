import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IActionPages} from "../../types/IMovies";


interface IActionSlice {
    users: any[]
    loader: boolean
    error: string
}

const initialState : IActionSlice = {
    users: [],
    loader: false,
    error: '',

}
export const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        fetchingActionDetail(state, action: PayloadAction<any>) {
            state.loader = true
        },
        fetchingActionSuccess(state, action: PayloadAction<any>) {
            state.loader = false
            state.users = action.payload
            state.error = ''
        },
        fetchingActionError(state, action: PayloadAction<string>) {
            state.loader = false
            state.users = []
            state.error = action.payload
        }
    }
})
export  default actionSlice.reducer
export const  {fetchingActionDetail, fetchingActionSuccess,fetchingActionError } = actionSlice.actions
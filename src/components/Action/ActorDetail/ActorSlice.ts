import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IActorDetailSlice {
    actor: Partial<any>
    loader: boolean,
    error: string
}

const initialState: IActorDetailSlice = {
    actor: {},
    loader: false,
    error: '',
}
export const ActorSlice = createSlice({
    name: 'actorDetail',
    initialState,
    reducers: {
        fetchingActorDetail(state, action: PayloadAction<any>) {
            state.loader = true

        },
        fetchingActorSuccess(state, action: PayloadAction<any>) {
            state.loader = false
            state.actor = action.payload
            state.error =''
        },
        fetchingActorError(state,action:PayloadAction<string>){
            state.loader=false
            state.actor ={}
            state.error = action.payload
        }
    }
})
export  default ActorSlice.reducer
export const {fetchingActorDetail,fetchingActorSuccess,fetchingActorError} =ActorSlice.actions
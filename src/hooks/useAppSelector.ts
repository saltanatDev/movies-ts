import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rooState} from "../store";


export  const useAppSelector:TypedUseSelectorHook<rooState> =useSelector
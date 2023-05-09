import React from 'react';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Popular from "./components/Router/Popular";
import NowPlaying from "./components/Router/NowPlaying";
import TopRaght from "./components/Router/TopRaght";
import DetailPage from "./components/DetailPage";
import ActorPage from "./components/Action/ActorDetail/ActorPage";

const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/top-rated'} element={<TopRaght/>}/>
                <Route path={'now-playing'} element={<NowPlaying/>}/>
                <Route path={"/detailPage/:movieId"} element={<DetailPage/>}/>
                <Route path={"/detailActor/:Id"} element={<ActorPage/>}/>

            </Routes>
        </>
    );
};

export default App;
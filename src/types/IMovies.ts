export interface IPopular {
    id: number
    title: string
    name: string
    poster_path: string
    release_date: number
}


export interface ITopRight {
    id: number
    title: string
    name: string
    poster_path: string
    release_date: number
}


export interface INowPlaying{
    id: number
    title: string
    name: string
    poster_path: string
    release_date: number
}

export interface IDetailPages {
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    original_language: string
    original_title: string
    status:string
}



export interface IActionPages {
    id: number
    name: string
    surname: string
    character: string
    original_name: string
    profile_path: string

}export interface IActonPages {
    id: number
    name: string
    surname: string
    character: string
    original_name: string
    profile_path: string
}


export interface IActorMovies{
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    biography:string
    original_language: string
    original_title: string
    status:string
    place_of_birth:string
    birthday:number
    also_known_as:string
}


export interface Movie {
    title: string;
    overview: string;
    poster_path: string | null;
    genres: number[];
    id: number;
    imdb_id: string;
    release_date: string;
    original_language: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    homepage: string;
    backdrop_path: string;
}

export interface Genre {
id: number;
name: string;
}



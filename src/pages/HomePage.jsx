import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "movies-api/Api";
import { MoviesList } from "components/MoviesList/MoviesList";


 const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <>
            <h1>TRENDING TODAY</h1>
            <MoviesList movies={movies} />
        </>
    );
 };

export default HomePage;
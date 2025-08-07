import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";

// --- THIS IS THE FIX ---
// Corrected the path to point directly to appwrite.js in the src folder
import { account, getTrendingMovies, updateSearchCount } from './appwrite.js'; 

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, settrendingMovies] = useState([]);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const userAccount = await account.get();
        console.log("Appwrite connection successful:", userAccount);
      } catch (error) {
        console.log("Appwrite connection failed, but this is expected if you're not logged in.", error);
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    if (!API_KEY) {
      setError("API Key is missing. Please add VITE_TMDB_API_KEY to your .env.local file and restart the server.");
      setIsLoading(false);
    }
  }, []);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchMovies = async (query = '') => {
    if (!API_KEY) return;
    setIsLoading(true);
    setError("");
    try {
      const endpoint = query 
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || "Failed to fetch movies");
      }

      const data = await response.json();

     if (data.results && data.results.length > 0) {
        setMovieList(data.results);
        // Only update search count if it was a search and we got results
        if (query) {
          await updateSearchCount(query, data.results[0]);
        }
      } else {
        // If there are no results, set an error message for the user
        if (query) {
          setError(`No movies found for "${query}"`);
        }
        setMovieList([]);
      }
      

    } catch (err) {
      console.error(`Error fetching movies: ${err.message}`);
      setError(`Error: ${err.message}. Please check your API key and network connection.`);
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () =>{
    try {
      const movies = await getTrendingMovies();
      settrendingMovies(movies)
    } catch (error) {
      console.log(`Error fetching trending movies: ${error}`);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchMovies(debouncedSearchTerm);
    } else {
      fetchMovies(); 
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  },[]);

  return (
    <main className="w-full min-h-screen bg-[url('/BG.png')] bg-cover bg-center">
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
          </h1>
          <Search 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
        </header>
          
          {trendingMovies.length > 0  && (
            <section className="trending">
              <h2>Trending Movies</h2>

              <ul>
                {trendingMovies.map((movie,index) => (
                  <li key = {movie.$id}>
                     <p>{index + 1}</p>
                     <img src={movie.poster_url} alt={movie.title}/>
                  </li>
                ))}
              </ul>
            </section>
          )
          }  


        <section>
          <h2>
            {debouncedSearchTerm ? `Results for "${debouncedSearchTerm}"` : "Popular Movies"}
          </h2>

          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p className="py-10 font-bold text-center text-red-500">{error}</p>
          ) : (
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;

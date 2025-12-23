import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/hero.module.css";
import { getRandomMovie } from "../service/fetchService";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const randomMovie = await getRandomMovie();
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(
        `/search?query=${encodeURIComponent(
          searchQuery.trim()
        )}&category=multi&page=1`
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section
      className={style.heroSection}
      style={{
        backgroundImage: movie
          ? `url(${IMAGE_BASE}${movie.backdrop_path || movie.poster_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className={style.heroContainer}>
        <div className={style.heroTitleContainer}>
          <h1>Welcome.</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>

        <div className={style.heroSearchContainer}>
          <input
            placeholder="Search for movie, tv show, person..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useEffect, useState } from "react";
import style from "../style/movieSection.module.css";
import Card from "./Card";
import { getTrendingMovies } from "../service/fetchService";

const TrendingMovie = () => {
  const [movies, SetMovies] = useState(null);
  const [period, setPeriod] = useState("day");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getTrendingMovies(period);
        SetMovies(res.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [period]);

  return (
    <section className={style.movieSection}>
      <div className={style.sectionHeader}>
        <h2>Trending Movies</h2>
        <div className={style.selector}>
          <div
            className={`${style.option} ${
              period === "day" ? style.active : ""
            }`}
            onClick={() => setPeriod("day")}
          >
            Today
          </div>
          <div
            className={`${style.option} ${
              period === "week" ? style.active : ""
            }`}
            onClick={() => setPeriod("week")}
          >
            This Week
          </div>
        </div>
        <select
          className={style.mobileSelector}
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="day">Today</option>
          <option value="week">This Week</option>
        </select>
      </div>
      <div
        key={period}
        className={`${style.cardContainer} ${style.animatePulse}`}
      >
        {movies ? <Card data={movies} /> : <p>no data</p>}
      </div>
    </section>
  );
};

export default TrendingMovie;

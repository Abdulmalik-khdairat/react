import { useEffect, useState } from "react";
import style from "../style/showSection.module.css";
import Card from "./Card";
import { getTrendingShows } from "../service/fetchService";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const TrendingShow = () => {
  const [show, setShow] = useState([]);
  const [period, setPeriod] = useState("day");
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const getRandom = async () => {
      try {
        const data = await getTrendingShows(period);

        setShow(data.results);
        if (data.results && data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const randomShow = data.results[randomIndex];
          setBgImage(
            randomShow.backdrop_path
              ? `${IMAGE_BASE}${randomShow.backdrop_path}`
              : `${IMAGE_BASE}${randomShow.poster_path}`
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    getRandom();
  }, [period]);

  return (
    <section
      className={style.movieSection}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={style.overlay}>
        {" "}
        <div className={style.sectionHeader}>
          <h2>Trending TV</h2>
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
          {show.length > 0 ? (
            <Card data={show} variant="white" />
          ) : (
            <p>No data</p>
          )}
        </div>{" "}
      </div>
    </section>
  );
};

export default TrendingShow;

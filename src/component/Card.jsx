import { useState } from "react";
import style from "../style/card.module.css";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";


const Card = ({ data, variant = "black" }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleCardMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const getRatingColor = (vote) => {
    const percentage = vote * 10; // 0-100
    if (percentage >= 70) return "#21d07a"; // green
    if (percentage >= 40) return "#d2d531"; // yellow
    return "#db2360"; // red
  };
  const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

  return (
    <>
      {data && data.length > 0 ? (
        data.map((item) => {
          const displayTitle = item.title || item.original_name || "Untitled";
          const displayDate = item.release_date || item.first_air_date || "";
          return (
            <div className={style.card} key={item.id}>
              <div
                className={`${style.cardImgContainer} 
          `}
              >
                <div className={style.cardMenuContainer}>
                  <img
                    onClick={() => handleCardMenu(item.id)}
                    className={`${style.cardMenu}
                   `}
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div
                    className={`${style.menuList} ${
                      openMenuId === item.id ? style.show : style.hide
                    }`}
                  >
                    <div>
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-6e8977a4772e1bf4249bdaa9f63b091281a651009a84bca5b1a2b2fe65724da7.svg"
                        alt=""
                      />
                      <p>Add to list</p>
                    </div>
                    <div>
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-28c7c34a7fef8b646f2f0c4c610f4a93bdce0b6cc24deea49674eb30f9961109.svg"
                        alt=""
                      />
                      <p>Favorite</p>
                    </div>
                    <div>
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-696996f38fbacdcebe327e9465c09386a177a5b7b93ac6665471ccbb239d9af0.svg"
                        alt=""
                      />
                      <p>Watchlist</p>
                    </div>
                    <div>
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-67a24f6d4324aa644c594653e762b1c0de2b3e1ce0852171cfa49cc2650de374.svg"
                        alt=""
                      />
                      <p>Your rating</p>
                    </div>
                  </div>
                </div>
                <img
                  className={`${style.cardImg}
                 ${openMenuId === item.id ? style.blur : ""}`}
                  height={225}
                  width={150}
                  src={`${IMAGE_BASE}${item.poster_path}`}
                  srcset=""
                  alt="4"
                />
                <div
                  className={`${style.ratingCircle}
               ${openMenuId === item.id ? style.blur : ""}`}
                >
                  <svg viewBox="0 0 36 36" className={style.circularChart}>
                    <path
                      className={style.circleBg}
                      d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={style.circle}
                      stroke={getRatingColor(item.vote_average)}
                      strokeDasharray={`${item.vote_average * 10}, 100`}
                      d="M18 2.0845
     a 15.9155 15.9155 0 0 1 0 31.831
     a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className={style.percentage}>
                      {Math.round(item.vote_average * 10)}%
                    </text>
                  </svg>
                </div>

                <div className={style.cardMenu}>
                  <div className={style.rate}></div>
                </div>
              </div>
              <div
                className={`${style.cardFooter}
             ${openMenuId === item.id ? style.blur : ""}`}
              >
                <as
                  href="#sa"
                  className={`${style.title}
                ${variant === "white" ? style.whiteFont : ""}
                `}
                >
                  {displayTitle}
                </as>
                <p
                  className={`${style.date}
                 ${variant === "white" ? style.whiteFont : ""}`}
                >
                  {formatDate(displayDate)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};
export default Card;

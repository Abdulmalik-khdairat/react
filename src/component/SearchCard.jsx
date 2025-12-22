import React from "react";
import style from "../style/srearchCard.module.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const SearchCard = ({ item }) => {

  const displayTitle =
    item.title || item.original_name || item.name || "Untitled";
    
  const displayDate = item.release_date || item.first_air_date || "";
  const img = item.poster_path || item.backdrop_path;



  const limitText = (text = "", max = 150) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  return (
    <>
      <div className={style.cardContainer}>
        <div>
          <img
            className={style.imgContainer}
            src={`${IMAGE_BASE}${img}`}
            alt=""
          />
        </div>
        <div className={style.detailsContainer}>
          <div className={style.cardHead}>
            <h2>{displayTitle}</h2>
            <p>{displayDate}</p>
          </div>
          <div className={style.cardFooter}>
            <p>{limitText(item.overview)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;

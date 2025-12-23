import style from "../style/SearchSidebar.module.css";
const SearchSidebar = ({ data }) => {
  const counts = {
    movie: 0,
    tv: 0,
    person: 0,
    collection: 0,
    company: 0,
    keyword: 0,
    network: 0,
    award: 0,
  };

  data.forEach((item) => {
    if (item.media_type && counts[item.media_type] !== undefined) {
      counts[item.media_type]++;
    }
    
    
  });

  return (
    <div className={style.searchSideBarContainer}>
      <div className={style.sideHeaderContainer}>
        <h2 className={style.sideHeader}>Search Results</h2>
      </div>
      <div className={style.categoryContainer}>
        <div>
          <p>Movies</p>
          <div>{counts.movie}</div>
        </div>
        <div>
          <p>TV Shows</p>
          <div>{counts.tv}</div>
        </div>
        <div>
          <p>People</p>
          <div>{counts.person}</div>
        </div>
        <div>
          <p>Collections</p>
          <div>{counts.collection}</div>
        </div>
        <div>
          <p>Companies</p>
          <div>{counts.company}</div>
        </div>
        <div>
          <p>Keywords</p>
          <div>{counts.keyword}</div>
        </div>
        <div>
          <p>Networks</p>
          <div>{counts.network}</div>
        </div>
        <div>
          <p>Awards</p>
          <div>{counts.award}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;

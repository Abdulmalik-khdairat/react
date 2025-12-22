import styles from "../style/navbar.module.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchTMDB } from "../service/fetchService";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = async (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input) {
      setResults([]);
      return;
    }

    try {
      const data = await searchTMDB(input);
      setResults(data.results);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    }
  };

  return (
    <header>
      {/*  sidebar */}
      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarNav}>
          <a href="/">Movies</a>
          <a href="/">TV Shows</a>
          <a href="/">People</a>
        </div>
        <div>
          <a className={styles.sidebarLinks}>Contribution Bible</a>
          <a className={styles.sidebarLinks}>Discussions</a>
          <a className={styles.sidebarLinks}>Leaderboard</a>
          <a className={styles.sidebarLinks}>Api</a>
          <a className={styles.sidebarLinks}>Support</a>
          <a className={styles.sidebarLinks}>Support</a>
        </div>
      </div>

      {/* 3. mobile navbar */}
      <div className={styles.navbar}>
        <div className={styles.menu} onClick={toggleMenu}>
          <FiMenu color="white" size={28} />
        </div>

        <div>
          <Link to={"/"}>
            <img
              className={styles.logo}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TMDB Logo"
            />
          </Link>
        </div>

        <div className={styles.navbarIconList}>
          <BsBellFill color="white" size={24} />
          <div className={styles.profile}>
            <span>A</span>
          </div>
          <img
            onClick={() =>
              searchInputRef.current && searchInputRef.current.focus()
            }
            className={styles.searchIcon}
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt="Search"
          />
        </div>
      </div>
      {/* desktop nav */}
      <div className={styles.desktopNav}>
        <div className={styles.logoLinksContainer}>
          <div>
            <Link to={"/"}>
              <img
                height={20}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.linksContainer}>
            <Link className={styles.link}>Movie</Link>
            <Link className={styles.link}> TV Shows</Link>
            <Link className={styles.link}>People</Link>
            <Link className={styles.link}>More</Link>
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div>
            <img
              width={22}
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <p className={styles.language}>EN</p>
          </div>
          <div>
            <BsBellFill color="white" size={22} />
          </div>
          <div className={styles.profile}>
            <span>A</span>
          </div>
          <div>
            <img
              onClick={() =>
                searchInputRef.current && searchInputRef.current.focus()
              }
              className={styles.searchIcon}
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
              alt="Search"
            />{" "}
          </div>
        </div>
      </div>

      <div className={styles.searchInputContainer}>
        <div className={styles.searchBox}>
          <FiSearch className={styles.Icon} size={20} />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for a movie, tv show, person..."
          />
        </div>
        {results.length > 0 && (
          <ul className={styles.searchResults}>
            {results.map((item) => {
              const displayTitle =
                item.title || item.original_name || item.name || "Untitled";

              return (
                <li
                  key={item.id}
                  onClick={() => {
                    navigate(
                      `/search?query=${encodeURIComponent(displayTitle)}`
                    );
                    setResults([]); // clear dropdown
                  }}
                >
                  {displayTitle}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;

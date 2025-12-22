import style from "../style/SearchPage.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchSidebar from "../component/SearchSidebar";
import SearchResult from "../component/SearchResult";
import { searchTMDB } from "../service/fetchService";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        const data = await searchTMDB(query, "multi", page);
        setResults(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      }
    };

    fetchResults();
  }, [query, page]);

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => {
      prev.set("query", query);
      prev.set("page", newPage);
      return prev;
    });
  };

  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, page + 2);

  return (
    <div className={style.searchPageContainer}>
      <SearchSidebar data={results} />

      <div className={style.searchMain}>
        <SearchResult results={results} />

        {totalPages > 1 && (
          <div className={style.pagination}>
            <button
              className={style.pageBtn}
              disabled={page === 1}
              onClick={() => page > 1 && handlePageChange(page - 1)}
            >
              ← Previous
            </button>

            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((p) => (
              <button
                key={p}
                className={`${style.pageBtn} ${
                  p === page ? style.activePage : ""
                }`}
                onClick={() => handlePageChange(p)}
              >
                {p}
              </button>
            ))}

            <button
              className={style.pageBtn}
              disabled={page === totalPages}
              onClick={() => page < totalPages && handlePageChange(page + 1)}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

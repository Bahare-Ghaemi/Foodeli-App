import { useEffect, useMemo } from "react";
import useLocaleStorage from "../../../../hooks/useLocaleStorage";
import { useShopStore } from "../../store";

type TProps = {
  className?: string;
};

const Pagination = ({ className }: TProps) => {
  const [page, setPage] = useLocaleStorage("current-page", 1);

  const { totalProductsCount, setCurrentPage, currentPage } = useShopStore();

  const lastPage = useMemo(() => {
    return totalProductsCount && Math.ceil(totalProductsCount / 9);
  }, [totalProductsCount]);

  const clickHandler = (type: "inc" | "dec") => {
    switch (type) {
      case "inc":
        // setPage((prev: number) => prev + 1);
        currentPage && setCurrentPage(currentPage + 1);
        break;
      case "dec":
        currentPage && setCurrentPage(currentPage - 1);
        break;
      default:
        break;
    }
  };

  

  return (
    <div className={`${className} flex justify-center`}>
      <div className={`join`}>
        <button
          className={`join-item ${
            page == 1
              ? "bg-orange-300 min-h-12 px-4 cursor-not-allowed"
              : "bg-orange-400 btn hover:bg-orange-500"
          } border-0 text-white`}
          onClick={() => (page == 1 ? null : clickHandler("dec"))}
        >
          «
        </button>
        <button className="join-item px-3 text-orange-500  border-0 bg-white">
          Page {page}
        </button>
        <button
          onClick={() => (page == lastPage ? null : clickHandler("inc"))}
          className={`join-item border-0 text-white ${
            page == lastPage
              ? "bg-orange-300 min-h-12 px-4 cursor-not-allowed"
              : "bg-orange-400 btn hover:bg-orange-500"
          }`}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;

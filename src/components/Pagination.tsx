import React, { useState } from "react";
import { IListings } from "../pages/Interface";

type Props = {
  sortedListings: IListings[];
  page: number;
  setPage: any;
  maxPage: number;
};

const Pagination = ({ sortedListings, page, setPage, maxPage }: Props) => {
  const [pagesOfPage, setPagesOfPage] = useState(0);

  const maxPagesOfPage = Math.floor(maxPage / 2);

  const handleClick = (newPagesOfPage: number) => {
    if (newPagesOfPage >= 0 && newPagesOfPage <= maxPage - 1) {
      setPagesOfPage(newPagesOfPage);
    }
  };

  const handleSetPage = (e: any) => {
    setPage(e.target.id);
  };

  const renderButtons = () => {
    const buttons = [];
    let startIndex = page;
    let endIndex = maxPage;

    if (page < 4) {
      startIndex = 0;
      endIndex = maxPage;
      for (let i = startIndex; i < endIndex; i++) {
        if (i >= sortedListings.length) {
          break;
        }
        buttons.push(
          <button
            id={i.toString()}
            key={i}
            className="border-2 w-10 px-2 py-1 font-semibold hover:bg-slate-100"
            onClick={handleSetPage}
          >
            {i + 1}
          </button>
        );
      }

      if (pagesOfPage > 2) {
        buttons.unshift(
          <button
            key="prev"
            className="border-2 px-1 py-1 font-semibold hover:bg-slate-100"
            onClick={() => handleClick(pagesOfPage - 1)}
          >
            Prev
          </button>
        );
      }

      if (maxPagesOfPage > 1 && pagesOfPage !== maxPagesOfPage) {
        buttons.push(
          <button
            key="next"
            className="border-2 px-1 py-1 font-semibold hover:bg-slate-100"
            onClick={() => handleClick(pagesOfPage + 1)}
          >
            Next
          </button>
        );
      }
    }
    return buttons;
  };

  return <div className="flex justify-center gap-2">{renderButtons()}</div>;
};

export default Pagination;

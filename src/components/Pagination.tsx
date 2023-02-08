import React, { useState } from "react";
import { IListings } from "../pages/Interface";

type Props = {
  sortedListings: IListings[];
};

const Pagination = ({ sortedListings }: Props) => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(sortedListings.length / 12);

  const handleClick = (newPage: number) => {
    if (newPage >= 0 && newPage <= maxPage - 1) {
      setPage(newPage);
    }
  };

  const renderButtons = () => {
    const buttons = [];
    const startIndex = page * 5;
    const endIndex = startIndex + 5;
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= sortedListings.length) {
        break;
      }
      buttons.push(
        <button
          key={i}
          className="border-2 px-4 py-1 font-semibold hover:bg-slate-100"
        >
          {i + 1}
        </button>
      );
    }
    if (page > 0) {
      buttons.unshift(
        <button
          key="prev"
          className="border-2 px-1 py-1 font-semibold hover:bg-slate-100"
          onClick={() => handleClick(page - 1)}
        >
          Prev
        </button>
      );
    }
    if (endIndex < sortedListings.length) {
      buttons.push(
        <button
          key="next"
          className="border-2 px-1 py-1 font-semibold hover:bg-slate-100"
          onClick={() => handleClick(page + 1)}
        >
          Next
        </button>
      );
    }
    return buttons;
  };

  return <div className="flex justify-center gap-2">{renderButtons()}</div>;
};

export default Pagination;

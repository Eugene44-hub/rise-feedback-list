import type { FeedbackPayloadType } from "@/types";
import FeedbackCard from "./feedback-card";
import { useState } from "react";
import Pagination from "../pagination";

const FeedbackList = ({ data }: { data: FeedbackPayloadType[] }) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentItems?.map((feedback) => (
          <FeedbackCard key={feedback?.email} {...feedback} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
};

export default FeedbackList;

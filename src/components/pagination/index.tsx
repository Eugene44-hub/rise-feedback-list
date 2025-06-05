import Chevron from "@/assets/svgs/chevron-icon.svg?react";
import cn from "@/utils/classname-merge";

type PaginationButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  nextPage,
  prevPage,
}: PaginationProps) => {
  const hasNextPage = currentPage < Math.ceil(totalItems / itemsPerPage);
  const hasPrevPage = currentPage > 1;
  return (
    <footer>
      <div className="flex items-center justify-between py-10">
        <p>
          Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
        </p>

        <div className="flex items-center gap-2">
          <PaginationButton
            className="-rotate-180"
            onClick={prevPage}
            disabled={!hasPrevPage}
          />
          <PaginationButton onClick={nextPage} disabled={!hasNextPage} />
        </div>
      </div>
    </footer>
  );
};

export default Pagination;

const PaginationButton = ({
  className,
  disabled,
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      className={cn(
        "p-3 border border-border-secondary rounded-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <span className={disabled ? "opacity-40" : ""}>
        <Chevron />
      </span>
    </button>
  );
};

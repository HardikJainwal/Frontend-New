import ReactPaginate from "react-paginate";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      previousLabel="Prev"
      containerClassName="flex justify-center gap-2 my-8 items-center"
      pageClassName="px-3 md:py-1 py-2 rounded-xl md:rounded-full cursor-pointer bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white transition"
      activeClassName="bg-orange-500 text-white"
      previousClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white"
      nextClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white"
      breakClassName="px-3 py-1 text-gray-600"
    />
  );
};


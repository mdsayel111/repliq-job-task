import React from "react";

export default function Pagination({ totalPages, page, setPage }) {
  return (
    <ul className="flex -space-x-px text-sm my-20 justify-center">
      <li>
        <a
          onClick={() => page > 1 && setPage(page - 1)}
          href="#"
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-yellow-900 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:text-gray-700 dark:bg-yellow-300 dark:border-gray-700 dark:text-yellow-900"
        >
          Previous
        </a>
      </li>
      {totalPages &&
        Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <li key={i}>
            <a
              onClick={() => setPage(i)}
              href="#"
              aria-current="page"
              className={`flex items-center justify-center px-3 h-8 text-blue-600 border  border-gray-700 dark:text-yellow-900 ${
                page === i ? "bg-yellow-300" : "bg-white hover:bg-yellow-100"
              }`}
            >
              {i}
            </a>
          </li>
        ))}
      {/* <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 "
        >
          1
        </a>
      </li>

      <li>
        <a
          href="#"
          aria-current="page"
          className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-yellow-300 dark:text-yellow-900"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 "
        >
          4
        </a>
      </li> */}

      <li>
        <a
          onClick={() => page < totalPages && setPage(page + 1)}
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 rounded-e-lg hover:text-gray-700 dark:bg-yellow-300 dark:border-gray-700 dark:text-yellow-900 "
        >
          Next
        </a>
      </li>
    </ul>
  );
}

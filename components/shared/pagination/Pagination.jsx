import React from "react";

export default function Pagination() {
  return (
    <ul className="flex -space-x-px text-sm my-20 justify-center">
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-yellow-900 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:text-gray-700 dark:bg-yellow-300 dark:border-gray-700 dark:text-yellow-900"
        >
          Previous
        </a>
      </li>
      <li>
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
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 "
        >
          2
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
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 "
        >
          5
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-900 bg-white border border-gray-300 rounded-e-lg hover:text-gray-700 dark:bg-yellow-300 dark:border-gray-700 dark:text-yellow-900 "
        >
          Next
        </a>
      </li>
    </ul>
  );
}
{
  /* <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-yellow-900 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-yellow-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-yellow-900 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-yellow-900 dark:hover:bg-yellow-100 ">Next</a>
    </li>
  </ul>
</nav> */
}

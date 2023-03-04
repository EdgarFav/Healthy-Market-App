import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  searchProducts,
  fetchFilterCategoryProducts,
} from "../actions/productActions";

export default function SearchBar({ filter, category }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: search,
      })
    );
  }, [search]);

  function onInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="w-9/12 mx-auto">
      <form className="bg-white">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-200 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            onChange={onInputChange}
            value={search}
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
      </form>
    </div>
  );
}

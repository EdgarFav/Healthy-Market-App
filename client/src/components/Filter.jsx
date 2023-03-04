import { useDispatch } from "react-redux";
import { fetchFilterCategoryProducts } from "../actions/productActions";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("categoria");

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFilter = (e) => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: "",
      })
    );
  };

  const handleFilterCategory = (e) => {
    dispatch(
      fetchFilterCategoryProducts({
        category: category,
        filterBy: filter,
        name: "",
      })
    );
  };

  return (
    <div className="grid mx-auto gap-2 my-5">
      <div className="flex flex-column">
        <label>Ordenamiento:</label>
        <label>Ordenamiento:</label>
      </div>
      <div className="flex w-9/12 gap-5 mx-auto">
        <SearchBar filter={filter} category={category} />

        <select
          name="filters"
          onChange={changeFilter}
          onClick={handleFilter}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="ordenamiento">Ordenamiento</option>
          <option value="alfabetic-A-Z">Alfabetic (A-Z)</option>
          <option value="alfabetic-Z-A">Alfabetic (Z-A)</option>
          <option value="cheapper-products">cheapper-products</option>
          <option value="expensive-products">expensive-products</option>
        </select>

        <select
          name="category"
          onChange={changeCategory}
          onClick={handleFilterCategory}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="categoria">Categoría</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="gluten-Free">Gluten-Free</option>
          <option value="vegano">Vegano</option>
          <option value="almacen">Almacen</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

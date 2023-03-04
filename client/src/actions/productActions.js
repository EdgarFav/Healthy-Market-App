import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`);
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (query) => {
    const response = await axios.get(
      "http://localhost:5000/products?productName=" + query
    );
    return response.data;
  }
);

export const findProductById = createAsyncThunk(
  "products/findProductById",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:5000/products/getProductById/${productId}`
    );
    console.log(response.data, "consolog de data");
    return response.data;
  }
);

// export const fetchFilteredProducts = createAsyncThunk(
//   "products/fetchFilteredProducts",
//   async (filterBy) => {
//     try {
//       const response = await axios.get(
//         `https://healthy-market-app-production.up.railway.app/products/filterBy?filterBy=${filterBy}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log({ error: error.message });
//       throw error;
//     }
//   }
// );

// export const fetchCategoryProducts = createAsyncThunk(
//   "products/fetchFilteredProducts",
//   async ({ category }) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/products/category?categoryValue=${category}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log({ error: error.message });
//       throw error;
//     }
//   }
// );

export const fetchFilterCategoryProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async ({ category, filterBy, name }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/category?categoryValue=${category}&filterBy=${filterBy}&name=${name}`
      );
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
      throw error;
    }
  }
);

export const reviewProducts = createAsyncThunk(
  "products/reviews",
  async ({ reviews, productId }) => {
    try {
      const response = await axios.post(
        `https://healthy-market-app-production.up.railway.app/reviews/${productId}`,
        reviews
      );
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const response = await axios.post(
        `https://healthy-market-app-production.up.railway.app/products`,
        product
      );
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
      throw error;
    }
  }
);

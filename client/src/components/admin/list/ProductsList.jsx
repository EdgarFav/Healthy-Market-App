import styled from "styled-components";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts, deleteProduct } from "../../../actions/productActions";
import { useNavigate } from "react-router-dom";
import EditProduct from "../EditProduct";
import { toast, ToastContainer } from "react-toastify";

export default function ProductsList() {
  const items = useSelector((state) => state.allProducts.productList);
  const { deleteStatus } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allProducts());
    if (deleteStatus === "success") {
      toast("Producto Eliminado");
    }
    console.log("1");
  }, [deleteStatus, dispatch]);

  const rows =
    Array.isArray(items) &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        category: item.category,
        name: item.name,
        isAvaliable: item.isAvaliable,
        price: "$" + item.price.toLocaleString(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt={params.row.name} />
          </ImageContainer>
        );
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "category", headerName: "Categoría", width: 130 },
    {
      field: "isAvaliable",
      headerName: "Disponible",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 80,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Actions>
            <button
              onClick={() => dispatch(deleteProduct(params.id))}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Eliminar
            </button>
            <EditProduct productId={params.id} />
            <button
              onClick={() => navigate(`/detail/${params.id}`)}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Ver
            </button>
          </Actions>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelectison
        disableSelectionOnClick
      />
    </div>
  );
}

const ImageContainer = styled.button`
  display: flex;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  align-items: center;
  img {
    height: 40px;
  }
`;

const Actions = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

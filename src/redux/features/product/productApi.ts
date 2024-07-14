import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query:(id) =>({
        url:`/products/${id}`,
        method:"GET"
      })      
    }),
  }),
});

export const { useGetProductsQuery,useGetProductByIdQuery } = productApi;

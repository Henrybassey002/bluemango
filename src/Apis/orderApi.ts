// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const orderApi = createApi({
//   reducerPath: "orderApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://redmangoapi.azurewebsites.net/api/",
//   }),
//   endpoints: (builder) => ({
//     createOrder: builder.mutation({
//       query: (orderDetails) => ({
//         url: "order",
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: orderDetails,
//       }),
//       //InvalidatesTags:["Orders"]
//     }),
//     getAllOrders: builder.query({
//       query: (userId) => ({
//         url: "order",
//         params: {
//           userId: userId,
//         },
//       }),
//       providesTags: ["Orders"],
//     }),
//     getOrderDetails: builder.query({
//       query: (id) => ({
//         url: `order/${id}`,
//       }),
//       providesTags: ["Orders"],
//     }),
//     updateOrderHeader: builder.mutation({
//       query(orderDetails) =>({
//         url: "order/"+orderDetails.orderHeaderId,
//         method: "PUT"
//         headers:{
//           "Content-type": "application/json",
//         },
//         body: orderDetails,
//       }),
//       invalidatesTags:["Orders"],
//     }),
//   }),
// });

// export const {
//   useCreateOrderMutation,
//   useGetAllOrdersQuery,
//   useGetOrderDetailsQuery,
//   useUpdateOrderHeaderMutation
// } = orderApi;
// export default orderApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7181/api/",
    //baseUrl: "https://redmangoapi.azurewebsites.net/api/",
  }),
  tagTypes: ["Orders"], // Needed to use `providesTags` or `invalidatesTags`
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderDetails) => ({
        url: "order",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: orderDetails,
      }),
      invalidatesTags: ["Orders"],
    }),

    getAllOrders: builder.query({
      query: (userId) => ({
        url: "order",
        params: {
          userId,
        },
      }),
      providesTags: ["Orders"],
    }),

    getOrderDetails: builder.query({
      query: (id) => ({
        url: `order/${id}`,
      }),
      providesTags: ["Orders"],
    }),

    updateOrderHeader: builder.mutation({
      query: (orderDetails) => ({
        url: `order/${orderDetails.orderHeaderId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: orderDetails,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderDetailsQuery,
  useUpdateOrderHeaderMutation,
} = orderApi;

export default orderApi;

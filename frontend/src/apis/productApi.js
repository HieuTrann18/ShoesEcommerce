import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("/product"),
  getById: (id) => axiosClient.get(`/product/${id}`),
  create: (data) => axiosClient.post("/product", data),
  update: (id, data) => axiosClient.put(`/product/${id}`, data),
  delete: (id) => axiosClient.delete(`/product/${id}`),
};

export default userApi;

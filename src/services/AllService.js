import http from "../http-common";

const getAllServices = () => {
  return http.get("/services");
};

const getServiceDetails = id => {
  return http.get(`/service-details/${id}`);
};

const getCategoryWiseService = id => {
  return http.get(`/category-wise-service/${id}`);
};

const Services = {
  getAllServices,
  getServiceDetails,
  getCategoryWiseService
};

export default Services;
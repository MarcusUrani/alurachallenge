import axios from "axios";

const fetchApi = async (slug) => {
  const requisition = await axios.get(
    `https://rest-api-alurageek.herokuapp.com/${slug}`
  );
  const response = await requisition.data;
  return response;
};

const postApi = async (slug, data) => {
  const requisition = await axios.post(
    `https://rest-api-alurageek.herokuapp.com/${slug}`,
    data
  );
  const response = await requisition.data;
  return response;
};

export { fetchApi, postApi };

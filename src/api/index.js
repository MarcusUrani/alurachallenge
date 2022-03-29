const fetchApi = async (slug) => {
  const requisition = await fetch(
    `https://rest-api-alurageek.herokuapp.com/${slug}`
  );
  const response = await requisition.json();
  return response;
};

export default fetchApi;

import axios from "axios";

const fetchApi = async (slug) => {
  const requisition = await axios.get(
    `https://rest-api-alurageek.herokuapp.com/${slug}`
  );
  const response = await requisition.data;
  return response;
};

const editApi = async (slug, data) => {
  const requisition = await axios.put(
    `https://rest-api-alurageek.herokuapp.com/${slug}/${data.id}`,
    {
      name: data.name,
      id: data.id,
      image: data.image,
      miniature: data.miniature,
      alt: data.alt,
      price: data.price,
      description: data.description,
      tag: data.tag,
      slug: data.slug,
    }
  );
  const response = await requisition.data;
  return response;
};

const postApi = async (data) => {
  const requisition = await axios.post(
    `https://rest-api-alurageek.herokuapp.com/products`,
    {
      name: data.name,
      image: data.image,
      miniature: data.miniature,
      alt: data.alt,
      price: data.price,
      description: data.description,
      tag: data.tag,
      slug: data.slug,
    }
  );
  const response = await requisition.data;
  return response;
};

export { fetchApi, editApi, postApi };

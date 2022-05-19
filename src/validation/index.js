const validate = (values) => {
  const errors = {};
  if (!values.productName) {
    errors.productName = "É necessário informar o nome do produto";
  } else if (values.productName.length < 3) {
    errors.productName = "O nome do produto deve ter no mínimo 3 caracteres";
  } else if (values.productName.length > 20) {
    errors.productName = "O nome do produto deve ter no máximo 20 caracteres";
  }

  if (!values.productDescription) {
    errors.productDescription = "A descrição do produto é obrigatória";
  } else if (values.productDescription.length > 150) {
    errors.productDescription =
      "A descrição do produto deve ter no máximo 150 caracteres";
  }

  if (!values.productPrice) {
    errors.productPrice = "O preço do produto é obrigatório";
  } else if (isNaN(values.productPrice)) {
    errors.productPrice = "O preço do produto deve ser um número";
  }

  return errors;
};

export default validate;

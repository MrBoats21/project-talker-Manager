const fetchItem = async (target) => {
  try {
    const request = await fetch(`https://api.mercadolibre.com/items/${target}`)
      .then((response) => response.json())
      .then((data) => {
        const obj = {
        sku: data.id,
        name: data.title,
        salePrice: data.price,
      };
      return obj;
    });
    return request;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

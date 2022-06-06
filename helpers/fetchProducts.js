const fetchProducts = async (target) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${target}`;

  try {
    const request = await fetch(URL)
      .then((response) => response.json())
      .then((data) => data.results);
    return request;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

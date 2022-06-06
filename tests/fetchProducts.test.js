require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })

  it('Verifica se a função fetch é chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se o endpoint foi chamado corretamente', () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    fetchProducts('computador')
    expect(fetch).toBeCalledWith(endpoint)
  })

  it('verifica se ao chamada corretamente, a função retorna um banco de dados igual ao de computadorSearch', async () => {
    const db = await fetchProducts('computador');
    expect(db).toEqual(computadorSearch.results);
  });

  it('Verifica se, ao chamada sem parâmetro, a função retorna o erro: "You must provide an url"', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});

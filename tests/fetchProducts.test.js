require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchSimulator).toBe('function')
  })

  it('Verifica se a função fetch é chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se o endpoint foi chamado corretamente', () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    fetchProducts('qualquercoisa')
    expect(fetch).toBeCalledWith(endpoint)
  })

  it('Testa se a função fetchProducts com o parâmetro computador retorna um banco de dados igual ao de computadorSearch', async () => {
    const db = await fetchProducts('computador')
    expect(db).toEqual(computadorSearch)
  })

  it('Testa se ao chamada sem parâmetro, a função retorna a mensagem de erro: "You must provide an url"', async () => {
    const test = fetchProducts()
    expect(test).toThrowError(new Error('You must provide an url'));
  })
});

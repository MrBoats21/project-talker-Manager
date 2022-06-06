require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })

  it('Verifica se a função fetch é chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se o endpoint foi chamado corretamente', () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith(endpoint)
  })

  it('verifica se ao chamada corretamente, a função retorna um banco de dados igual ao de item, iportado no arquivo', async () => {
    const db = await fetchItem('MLB1615760527');
    expect(db).toEqual(item);
  });

  it('Verifica se, ao chamada sem parâmetro, a função retorna o erro: "You must provide an url"', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});

import Product from './Product';

describe('Product', () => {
  it('fetch all products', () => {
    const fetchAdapter = { get: () => [{ name: 'Product 1' }] };
    const product = new Product(fetchAdapter);
    expect(product.get()).toEqual([{ name: 'Product 1' }]);
  });
});
